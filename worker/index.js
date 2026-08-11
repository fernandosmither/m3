// First-party reverse proxy for PostHog ingestion (PostHog's documented
// Cloudflare pattern): /ingest/* -> PostHog US cloud. Everything else is
// served from the static assets binding.

const API_HOST = "us.i.posthog.com";
const ASSET_HOST = "us-assets.i.posthog.com";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/ingest/")) {
      const isStatic = url.pathname.startsWith("/ingest/static/");
      const host = isStatic ? ASSET_HOST : API_HOST;
      const target = new URL(
        url.pathname.replace(/^\/ingest/, "") + url.search,
        `https://${host}`,
      );

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
