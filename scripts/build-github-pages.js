import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = dirname(__dirname);
const viteBinary = join(projectRoot, "node_modules", "vite", "bin", "vite.js");

process.env.GITHUB_PAGES = "true";
process.env.GITHUB_REPOSITORY ??= "TSaiPradyumna/SSSIHL_COE_DFNS_NEW";

execSync(`node ${viteBinary} build`, { stdio: "inherit" });
