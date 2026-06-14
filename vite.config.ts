// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "SSSIHL_COE_DFNS_NEW";
const base = isGitHubPages ? `/${repoName}/` : "/";

const domainPrerenderPages = [
  "cereal-millet-grain",
  "dairy-plant-based",
  "fruits-vegetables",
  "product-development",
  "packaging-shelf-life",
  "food-safety-adulteration",
  "resource-recovery",
  "startup-incubation",
].map((slug) => ({ path: `/domains/${slug}` }));

export default defineConfig({
  vite: {
    base,
  },
  nitro: isGitHubPages
    ? false
    : {
        preset: "netlify",
        output: {
          dir: "dist",
          serverDir: "dist/server",
          publicDir: "dist/client",
        },
      },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "src/server.ts" },
    ...(isGitHubPages
      ? {
          prerender: {
            enabled: true,
            crawlLinks: true,
            failOnError: true,
            pages: domainPrerenderPages,
          },
        }
      : {}),
  },
  environments: {
    server: {
      build: {
        outDir: "dist/server",
        rollupOptions: {
          input: "src/server.ts",
        },
      },
    },
  },
});
