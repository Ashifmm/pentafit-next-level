#!/usr/bin/env node
// Cloudflare Pages "Advanced Mode" packaging.
// Nitro emits a Cloudflare module Worker into dist/server/ and the static site
// into dist/client/. Pages wants a single publish directory containing a
// `_worker.js/` module directory. This script merges the two.
import { rmSync, mkdirSync, cpSync, renameSync, existsSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SERVER_DIR = "dist/server";
const CLIENT_DIR = "dist/client";
const WORKER_DIR = join(CLIENT_DIR, "_worker.js");

if (!existsSync(SERVER_DIR)) {
  console.error(`[pages-postbuild] ${SERVER_DIR} not found — did the build run?`);
  process.exit(1);
}

rmSync(WORKER_DIR, { recursive: true, force: true });
mkdirSync(WORKER_DIR, { recursive: true });

for (const entry of readdirSync(SERVER_DIR)) {
  if (entry === "wrangler.json") continue; // Workers-only config; Pages uses root wrangler.toml
  const src = join(SERVER_DIR, entry);
  const dst = join(WORKER_DIR, entry);
  cpSync(src, dst, { recursive: true });
}

// Pages requires the module entry to be `_worker.js/index.js`.
const entryMjs = join(WORKER_DIR, "index.mjs");
const entryJs = join(WORKER_DIR, "index.js");
if (existsSync(entryMjs)) {
  renameSync(entryMjs, entryJs);
}

// Tell Pages not to serve worker internals or build manifests as static assets.
writeFileSync(
  join(CLIENT_DIR, "_routes.json"),
  JSON.stringify({ version: 1, include: ["/*"], exclude: ["/_worker.js/*", "/_headers"] }, null, 2),
);

const size = (p) => statSync(p).size;
console.log(`[pages-postbuild] packaged Worker -> ${entryJs} (${size(entryJs)} bytes)`);