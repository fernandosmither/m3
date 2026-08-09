# M3

Landing page for M3 — a three-month, salary-matched fellowship for senior
security people moving into AI security.

Live at [m3.fdosmith.dev](https://m3.fdosmith.dev). Originally started at
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

Static output only — build and rsync `dist/` to the web root:

```sh
npm run build
rsync -az --delete --chmod=Du=rwx,Dgo=rx,Fu=rw,Fgo=r dist/ oraclawd:/var/www/m3/
```
