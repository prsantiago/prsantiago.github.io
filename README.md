# PRsantiago — Personal Brand Website

A fast, lightweight developer-first personal brand site and public archive (`Home`, `Projects`, `Articles`) built with static HTML5, Tailwind CSS, and build-time `.env` injection for GitHub Pages.

## Repository Structure

```
.
├── .env.example                # Template for personal brand & profile variables
├── assets/
│   └── js/
│       └── clocks.js           # Live MX / DK 24-hour footer clocks
├── src/
│   ├── index.html              # Home page (Identity, Focus, Archive index)
│   ├── projects/
│   │   └── index.html          # Projects archive & dev-native Entry Template
│   ├── articles/
│   │   └── index.html          # Articles archive & dev-native Entry Template
│   └── input.css               # Tailwind source & fonts (JetBrains Mono + Instrument Sans)
├── scripts/
│   └── build.js                # Injects .env into src/ -> dist/, copies assets/, builds Tailwind CSS
├── dist/                       # Generated static site (gitignored)
├── tailwind.config.js          # Tailwind configuration & high-contrast dark palette
├── package.json                # Build scripts (Node + Tailwind CLI)
└── .github/
    └── workflows/
        └── deploy.yml          # GitHub Actions workflow to build and deploy dist/ to GitHub Pages
```

## Customization Quickstart

### 1. Configure Personal Information (`.env`)
Copy `.env.example` to `.env` (gitignored) and fill in your details:

```bash
cp .env.example .env
```

Keys:
* `OWNER_NAME`: Your first name used in personal introductions
* `BRAND_NAME`: Brand name shown in the header, page titles, and footer
* `LINKEDIN_USERNAME`: Your LinkedIn handle
* `GH_USERNAME`: Your GitHub username

For GitHub Pages deployments, add these same 4 keys in your repository **Settings** → **Secrets and variables** → **Actions** → **Variables**.

### 2. Add Projects (`src/projects/index.html`)
Uncomment the dev-native `Project Entry` template inside `src/projects/index.html` (title, year, summary, stack tags, and Source/Live links).

### 3. Add Articles (`src/articles/index.html`)
Uncomment the dev-native `Article Entry` template inside `src/articles/index.html` (date, reading time, title, summary, and topic tags).

## Local Development

```bash
# 1. Install dependencies (Tailwind CLI)
npm install

# 2. Build the site (injects .env + copies assets + compiles Tailwind CSS into dist/)
npm run build

# 3. Optional: watch CSS changes into dist/assets/css/style.css
npm run dev
```

Preview the generated site by serving `dist/` (for example, `python3 -m http.server -d dist`).

## GitHub Pages Deployment

### Option A: Interactive Setup Wizard
```bash
./scripts/setup-github-pages.sh
```

### Option B: Manual Setup
1. Push this repository to GitHub (`git push origin main`).
2. Go to **Settings** → **Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml` and publishes `dist/`.
