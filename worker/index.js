// First-party reverse proxy for PostHog ingestion, on a bespoke path so
// generic blocklist path rules don't match. Additionally renames the
// session-recording script: blocklists (EasyPrivacy) match the literal
// filename "posthog-recorder.js" even first-party, which kills replay. We
// serve it as "/static/orbit.js" and rewrite the config PostHog sends so the
// SDK requests that name. /ingest/* stays as a legacy alias.
// Everything else is served from the static assets binding.

const API_HOST = "us.i.posthog.com";
const ASSET_HOST = "us-assets.i.posthog.com";
const PROXY_PREFIXES = ["/arc", "/ingest"];
const REC_ALIAS = "orbit"; // un-blockable name the client will request
const REC_REAL = "posthog-recorder"; // PostHog's real (blocked) asset name

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const prefix = PROXY_PREFIXES.find((p) => url.pathname.startsWith(p + "/"));
    if (prefix) {
      let path = url.pathname.slice(prefix.length);
      const isStatic = path.startsWith("/static/");

      // Map our clean recorder alias back to PostHog's real asset name.
      if (isStatic && path === `/static/${REC_ALIAS}.js`) {
        path = `/static/${REC_REAL}.js`;
      }

      const host = isStatic ? ASSET_HOST : API_HOST;
      const target = new URL(path + url.search, `https://${host}`);

      const headers = new Headers(request.headers);
      const clientIp = request.headers.get("cf-connecting-ip");
      if (clientIp) headers.set("X-Forwarded-For", clientIp);

      const upstream = await fetch(target, {
        method: request.method,
        headers,
        body:
          request.method === "GET" || request.method === "HEAD"
            ? undefined
            : request.body,
        redirect: "follow",
      });

      // Rewrite the recorder script name wherever PostHog names it, so the
      // client fetches the alias. Config/flags responses are small text;
      // decode fully and fix the content headers we invalidate by decoding.
      const ct = upstream.headers.get("content-type") || "";
      const mayName =
        path.startsWith("/flags") ||
        path.startsWith("/decide") ||
        path.startsWith("/array/") ||
        path.includes("/config");
      const isText =
        ct.includes("json") || ct.includes("javascript") || ct.includes("text");

      if (mayName && isText) {
        let body = await upstream.text();
        if (body.includes(REC_REAL)) body = body.split(REC_REAL).join(REC_ALIAS);
        const h = new Headers(upstream.headers);
        h.delete("content-encoding");
        h.delete("content-length");
        return new Response(body, {
          status: upstream.status,
          statusText: upstream.statusText,
          headers: h,
        });
      }

      return upstream;
    }

    return env.ASSETS.fetch(request);
  },
};
