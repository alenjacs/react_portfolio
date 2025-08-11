
# React Portfolio — Alen Jacob Seby

High-contrast (black/orange) developer portfolio built with React.

## Live Demo & Assets
- Live: https://<your-username>.github.io/<your-repo> (or Vercel/Netlify URL)
- Resume: public/Alen_Jacob_Seby_Resume.pdf
- Contact: mailto:alenjacs@gmail.com

## Features
- Black/orange high-contrast theme (accessible, WCAG-friendly)
- Two tabs: Projects and Work in Progress
- Project cards show project names (not grey thumbnails)
- Contact form with EmailJS (sends email to alenjacs@gmail.com)
- Responsive layout, keyboard focus states, reduced motion support

## Tech Stack
- React (Create React App)
- EmailJS (client-side email)
- Plain CSS (no framework)
- ESLint + Prettier

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
git clone[ https://github.com/<your-username>/<your-repo>.git](https://github.com/alenjacs/react_portfolio.git)
cd react_portfolio

npm install



EmailJS keys: Dashboard → Account → API Keys (Public Key) and Email Services/Templates for IDs.

### Run Locally
npm start
App runs at http://localhost:3000.

### Build
npm run build
Outputs production files to build/.

## Scripts
start: react-scripts start
build: react-scripts build
test: react-scripts test
lint: eslint "src/**/*.{js,jsx}"
format: prettier -w "src/**/*.{js,jsx,css,md}"

## Project Structure
src/
  components/
    Header/
    Tabs/
    Projects/
    ContactForm/
  pages/
  assets/
  styles/
  App.js
  index.js
public/
  Alen_Jacob_Seby_Resume.pdf

## Theming (High Contrast)
:root {
  --bg: #000000;
  --fg: #ffffff;
  --accent: #ff7a00; /* orange */
  --muted: #9a9a9a;
  --card: #0f0f0f;
  --border: #2a2a2a;
}
body { background: var(--bg); color: var(--fg); }
a { color: var(--accent); }
button:focus, a:focus { outline: 2px solid var(--accent); outline-offset: 2px; }

## Accessibility Checklist
- Color contrast ≥ 7:1 for text on background
- Visible focus styles for all interactive elements
- All images have alt text (or aria-hidden="true" if decorative)
- Respect user reduced motion (@media (prefers-reduced-motion: reduce))

## Deployment

### GitHub Pages
npm i -D gh-pages
In package.json:
  "homepage": "https://<your-username>.github.io/<your-repo>",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
Deploy:
npm run deploy

### Vercel (Alternative)
- Import repo on vercel.com
- Framework: Create React App
- Build command: npm run build
- Output: build

## Troubleshooting
- ESLint “Unexpected token +”: remove stray + characters left from patch diffs.
- Email not sending: verify .env keys and that the EmailJS template fields match your form names.
- Blank page on GitHub Pages: ensure correct homepage and repo name; redeploy after npm run build.

## License
MIT © Alen Jacob Seby

## Contact
- Email: alenjacs@gmail.com
- GitHub: https://github.com/alenjacs
