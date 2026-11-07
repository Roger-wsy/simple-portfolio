# Roger Wong Sie Yang Portfolio

A responsive, orbital-inspired portfolio built with React, Vite, GSAP, and Tailwind CSS. It presents Roger's current software engineering work at Athena Dynamics alongside his experience, selected systems, skills, education, résumé, and contact details.

## ✨ Features
- Single editorial portfolio experience with anchored navigation
- Animated orbital trajectory and responsive gravity-field background
- Light and dark themes with system preference and localStorage persistence
- Experience, projects, skills, education, leadership, résumé, and contact sections
- Reduced-motion support, keyboard navigation, and responsive layouts
- SEO metadata and a custom orbital favicon

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
- GSAP with ScrollTrigger and MotionPathPlugin
- Tailwind CSS plus authored component styles
- Archivo Variable and IBM Plex Mono

## 📸 Preview
Run locally and open `http://localhost:5173` to view the site.
