import { execSync } from "node:child_process";

process.env.GITHUB_PAGES = "true";
process.env.GITHUB_REPOSITORY ??= "TSaiPradyumna/SSSIHL_COE_DFNS_NEW";

execSync("vite build", { stdio: "inherit" });
