# beyondvibing.com

Sales page for Beyond Vibing Academy (by Groxio). Context for agents: [AGENTS.md](AGENTS.md).

Use Node.js 24 (minimum 22.12). Install the locked dependencies with `npm ci`.

## Local development with Tidewave

Run `npm run dev` and open `http://localhost:4322/`. The port is fixed (Gig City Elixir uses 4321, so both can run together).

In the Tidewave IDE (`http://localhost:9832/`), select **New space** and connect `http://localhost:4322`. Agents can also use `http://localhost:4322/tidewave/connect` and `http://localhost:4322/tidewave/mcp`. Tidewave runs only in development and is excluded from the static build.

| Command | Action |
| :-- | :-- |
| `npm ci` | Install the locked dependencies |
| `npm run dev` | Dev server at `localhost:4322` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview the build |

## Deploy

Pushing to `main` deploys to GitHub Pages (`.github/workflows/astro.yml`), which writes the `beyondvibing.com` CNAME. DNS is at Cloudflare (registrar: Squarespace, until Nov 2028). GitHub Pages records: four A and four AAAA on `@`, and `www` as a CNAME to `paulo-valim.github.io`, all DNS only (grey cloud).
