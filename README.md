# PRSantiago — Personal Brand Website

A fast, lightweight, and distinctive personal brand page crafted in an **Editorial / Modern Monograph** aesthetic (warm paper tone, elegant typography, and focused reading experience). 

Engineered with static HTML5 and Tailwind CSS, ready for zero-latency deployment on **GitHub Pages**.

---

## 📁 Repository Structure

```
.
├── index.html                  # Main landing page (Overview, Services, Featured Works, Contact)
├── projects/
│   └── index.html              # Dedicated projects archive with structured case study skeletons
├── writing/
│   └── index.html              # Dedicated technical writing archive with essay skeletons
├── assets/
│   └── css/
│       └── style.css           # Pre-compiled, minified production CSS (tracked in Git)
├── src/
│   └── input.css               # Tailwind source file & Google Fonts import (Newsreader + Inter)
├── tailwind.config.js          # Tailwind configuration & editorial color palette
├── package.json                # Build scripts (Tailwind CLI)
└── .github/
    └── workflows/
        └── deploy.yml          # Automated GitHub Actions workflow to build and deploy to GitHub Pages
```

---

## ✏️ Customization Quickstart

All content is clean, semantic static HTML. You can edit the text directly in any code editor (or right in GitHub’s web editor):

### 1. Update Contact Information (`index.html`)
Open `index.html` and search for:
* **WhatsApp**: Replace `YOUR_PHONE_NUMBER` with your phone number including country code (e.g., `34612345678` with no `+` or spaces):
  ```html
  href="https://wa.me/34612345678?text=Hi%20Santiago..."
  ```
* **LinkedIn**: Replace `YOUR_LINKEDIN_USERNAME` with your handle (e.g. `prsantiago`):
  ```html
  href="https://www.linkedin.com/in/prsantiago"
  ```
* **Email**: Pre-configured with `prsantiago96@gmail.com`. You can change this or customize the pre-filled subject and body.

### 2. Add or Edit Projects (`projects/index.html`)
The projects page includes pre-structured case studies and an empty template slot (`#project-3`) with:
* `Challenge / Problem`
* `Technical Architecture`
* `Key Outcomes & Metrics`
* `Tech Stack tags`

### 3. Add or Edit Essays (`writing/index.html`)
The writing page provides pre-formatted technical notes and an empty article template (`#essay-3`) ready for your insights, reading time, and bullet-point takeaways.

---

## 🛠️ Local Development

If you want to modify styles or add new Tailwind classes locally:

```bash
# 1. Install dependencies (Tailwind CLI)
npm install

# 2. Start watcher (automatically recompiles assets/css/style.css on file save)
npm run dev

# 3. Compile for production
npm run build
```

> **Note**: You don't even need Node.js installed to preview the site! Because `assets/css/style.css` is already compiled and included, you can simply double-click `index.html` or use any basic static server (like `python3 -m http.server`).

---

## 🚀 GitHub Pages Deployment

This repository includes a ready-to-run GitHub Actions workflow in `.github/workflows/deploy.yml`.

### Enable GitHub Pages in 2 Clicks:
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Initial personal brand website"
   git push origin main
   ```
2. On GitHub, go to your repository **Settings** &rarr; **Pages**.
3. Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
4. That's it! Every time you push to `main`, GitHub Actions will automatically compile the CSS and publish the site.
