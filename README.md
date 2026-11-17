# PRSantiago — Personal Brand Website

A fast, lightweight, and distinctive personal brand page crafted in an **Editorial / Modern Monograph** aesthetic (warm paper tone, elegant typography, and focused reading experience). 

Engineered with static HTML5 and Tailwind CSS, ready for zero-latency deployment on **GitHub Pages**.

---

## 📁 Repository Structure

```
.
├── .env.example                # Template for personal contact & brand variables
├── src/
│   ├── index.html              # Main landing page template (Overview, Services, Featured Works, Contact)
│   ├── projects/
│   │   └── index.html          # Projects archive template
│   ├── writing/
│   │   └── index.html          # Technical writing archive template
│   └── input.css               # Tailwind source file & Google Fonts import (Newsreader + Inter)
├── scripts/
│   └── build.js                # Build script: injects .env into src/ -> dist/ and compiles Tailwind CSS
├── dist/                       # Generated static site (gitignored)
├── tailwind.config.js          # Tailwind configuration & editorial color palette
├── package.json                # Build scripts (Node + Tailwind CLI)
└── .github/
    └── workflows/
        └── deploy.yml          # Automated GitHub Actions workflow to build and deploy dist/ to GitHub Pages
```

---

## ✏️ Customization Quickstart

### 1. Configure Personal Information (`.env`)
Copy `.env.example` to `.env` (gitignored) and fill in your details:

```bash
cp .env.example .env
```

Keys:
* `OWNER_NAME`: Your display/first name used in greetings and tooltips
* `BRAND_NAME`: Brand name shown in the header, page titles, and footer
* `EMAIL`: Your contact email address
* `WHATSAPP_PHONE`: Your phone number including country code (e.g., `34612345678` with no `+` or spaces)
* `LINKEDIN_USERNAME`: Your LinkedIn handle
* `GH_USERNAME`: Your GitHub username

For GitHub Pages deployments, add these same 6 keys in your repository **Settings** → **Secrets and variables** → **Actions** → **Variables**.

### 2. Add or Edit Projects (`src/projects/index.html`)
The projects page includes pre-structured case studies and an empty template slot (`#project-3`) with:
* `Challenge / Problem`
* `Technical Architecture`
* `Key Outcomes & Metrics`
* `Tech Stack tags`

### 3. Add or Edit Essays (`src/writing/index.html`)
The writing page provides pre-formatted technical notes and an empty article template (`#essay-3`) ready for your insights, reading time, and bullet-point takeaways.

---

## 🛠️ Local Development

```bash
# 1. Install dependencies (Tailwind CLI)
npm install

# 2. Build the site (injects .env + compiles Tailwind CSS into dist/)
npm run build

# 3. Optional: watch CSS changes into dist/assets/css/style.css
npm run dev
```

Preview the generated site by serving `dist/` (for example, `python3 -m http.server -d dist`).

---

## 🚀 GitHub Pages Deployment

### Option A: Interactive Setup Wizard (Recommended)
Run the built-in terminal wizard. It creates your GitHub repository, links the remote, pushes your code, opens the Pages settings, and checks the live build:

```bash
./scripts/setup-github-pages.sh
```

---

### Option B: Manual Setup
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Initial personal brand website"
   git push origin main
   ```
2. On GitHub, go to your repository **Settings** &rarr; **Pages**.
3. Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
4. That's it! Every time you push to `main`, GitHub Actions will automatically compile the CSS and publish the site.
