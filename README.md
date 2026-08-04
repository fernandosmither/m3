# M3 website

Static Astro website for M3 (Mentorless Match).

## Development

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
npm run build
npm run preview
```

The site uses `/m3` as its base path. During local development, open
`http://localhost:4321/m3/`.

## Project structure

```text
public/                 Static assets
src/components/         Reusable Astro components
src/data/site.ts        Site content and settings
src/layouts/             Shared page layout
src/pages/               Route components
src/styles/global.css    Global styles and design tokens
```

Update `site.applyUrl` in `src/data/site.ts` with the final application form
URL before release.
