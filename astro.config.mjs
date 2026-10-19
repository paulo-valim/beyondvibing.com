import { defineConfig } from "astro/config";
import tidewave from "tidewave/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tmpdir } from "node:os";
import { join } from "node:path";

export default defineConfig({
  site: "https://beyondvibing.com",
  base: "/",
  outDir: "./dist",
  compressHTML: true,
  // 4322, so this site and Gig City Elixir (4321) can run side by side.
  server: { host: "localhost", port: 4322 },
  vite: {
    plugins: [tailwindcss(), tidewave({ tmpDir: join(tmpdir(), "beyondvibing-tidewave") })],
    server: { strictPort: true },
  },
});
