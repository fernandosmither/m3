// First-party reverse proxy for PostHog ingestion (PostHog's documented
// Cloudflare pattern), on a bespoke path so generic blocklist path rules
// don't match. /ingest/* stays as a legacy alias for cached pages.
// Everything else is served from the static assets binding.

const API_HOST = "us.i.posthog.com";
const ASSET_HOST = "us-assets.i.posthog.com";
const PROXY_PREFIXES = ["/arc", "/ingest"];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const prefix = PROXY_PREFIXES.find((p) => url.pathname.startsWith(p + "/"));
    if (prefix) {
      const path = url.pathname.slice(prefix.length);
      const host = path.startsWith("/static/") ? ASSET_HOST : API_HOST;
      const target = new URL(path + url.search, `https://${host}`);

      const headers = new Headers(request.headers);
      const clientIp = request.headers.get("cf-connecting-ip");
      if (clientIp) headers.set("X-Forwarded-For", clientIp);

      return fetch(target, {
        method: request.method,
        headers,
        body:
          request.method === "GET" || request.method === "HEAD"
            ? undefined
            : request.body,
        redirect: "follow",
      });
    }

    return env.ASSETS.fetch(request);
  },
};
