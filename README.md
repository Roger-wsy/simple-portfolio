# Simple Portfolio

A minimalist, responsive personal portfolio built with React + Vite and styled using Tailwind CSS.

## ✨ Features
- Single-page layout with smooth scrolling navigation
- Light/Dark theme toggle with system preference + localStorage persistence
- Sections for About, Skills, Projects, Experience, Education, and Contact
- Responsive layout for mobile and desktop
- SEO-ready meta tags

## 📦 Getting Started

### Install dependencies
```bash
npm install
```

### Start the dev server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview the production build
```bash
npm run preview
```

## 🚀 Deployment

### GitHub Pages
1. Install the GitHub Pages deployment helper:
   ```bash
   npm install -D gh-pages
   ```
2. Add the following scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run:
   ```bash
   npm run deploy
   ```
4. Configure the GitHub Pages source to use the `gh-pages` branch.

### Netlify
1. Push this repository to GitHub.
2. In Netlify, create a new site from GitHub.
3. Set the build command to `npm run build` and the publish directory to `dist`.

### Vercel
1. Import the repository in Vercel.
2. Use the default Vite settings (build command `npm run build`, output directory `dist`).

## 🧰 Tech Stack
- React 19 + Vite
- Tailwind CSS

## 📸 Preview
Run locally and open `http://localhost:5173` to view the site.
