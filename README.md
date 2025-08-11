
# React Portfolio — Alen Jacob Seby

High-contrast (black/orange) developer portfolio built with React.



## Features
- Black/orange high-contrast theme (accessible, WCAG-friendly)
- Two tabs: Projects and Work in Progress
- Project cards show project names (not grey thumbnails)
- Contact form with EmailJS (sends email to alenjacs@gmail.com)
- Responsive layout, keyboard focus states, reduced motion support

## Tech Stack
- React (Create React App)
- EmailJS (client-side email)


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



## License
MIT © Alen Jacob Seby

## Contact
- Email: alenjacs@gmail.com
- GitHub: https://github.com/alenjacs
