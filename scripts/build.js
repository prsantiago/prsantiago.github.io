const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'src');
const DIST_DIR = path.join(ROOT, 'dist');
const ASSETS_DIR = path.join(ROOT, 'assets');
const ENV_PATH = path.join(ROOT, '.env');
const ENV_EXAMPLE_PATH = path.join(ROOT, '.env.example');

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const result = {};
  for (const rawLine of fs.readFileSync(filePath, 'utf8').split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eqIdx = line.indexOf('=');
    if (eqIdx === -1) continue;
    const key = line.slice(0, eqIdx).trim();
    let val = line.slice(eqIdx + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    result[key] = val;
  }
  return result;
}

function buildConfig() {
  const keys = Object.keys(parseEnvFile(ENV_EXAMPLE_PATH));
  const fileEnv = parseEnvFile(ENV_PATH);
  const config = {};
  for (const key of keys) {
    config[key] = process.env[key] || fileEnv[key] || '';
  }
  return config;
}

function renderHtmlFiles(srcDir, distDir, config) {
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const distPath = path.join(distDir, entry.name);
    if (entry.isDirectory()) {
      renderHtmlFiles(srcPath, distPath, config);
    } else if (entry.name.endsWith('.html')) {
      fs.mkdirSync(path.dirname(distPath), { recursive: true });
      let html = fs.readFileSync(srcPath, 'utf8');
      for (const [key, value] of Object.entries(config)) {
        html = html.replaceAll(`{{${key}:url}}`, encodeURIComponent(value));
        html = html.replaceAll(`{{${key}}}`, value);
      }
      fs.writeFileSync(distPath, html, 'utf8');
    }
  }
}

const config = buildConfig();
fs.rmSync(DIST_DIR, { recursive: true, force: true });
fs.mkdirSync(DIST_DIR, { recursive: true });

if (fs.existsSync(ASSETS_DIR)) {
  fs.cpSync(ASSETS_DIR, path.join(DIST_DIR, 'assets'), { recursive: true });
}

renderHtmlFiles(SRC_DIR, DIST_DIR, config);

const tailwindBin = path.join(ROOT, 'node_modules', '.bin', 'tailwindcss');
execFileSync(
  tailwindBin,
  ['-i', './src/input.css', '-o', './dist/assets/css/style.css', '--minify'],
  { cwd: ROOT, stdio: 'inherit' }
);
