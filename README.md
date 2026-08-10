# M3

Landing page for M3 — a three-month, salary-matched fellowship for senior
security people moving into AI security.

Live at [m3fellowship.com](https://m3fellowship.com), served by a Cloudflare
Worker (static assets). Originally started at
[ignaciobernardo/m3-website](https://github.com/ignaciobernardo/m3-website);
this repo is the canonical home going forward.

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the static site to `./dist/`           |
| `npm run preview` | Preview the built site locally               |

## Deploy

Push to `main`. Cloudflare Workers Builds runs `npm run build` and
`npx wrangler deploy` (see `wrangler.jsonc`); non-production branches get
preview versions via `npx wrangler versions upload`.
