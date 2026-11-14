# Project Manager & Search App

A responsive React web application that lets users add new projects and filter existing projects in real time by name or description. Built with React state management and inline flexible styling so it adapts cleanly across mobile phones, tablets, and desktops.

## Features

- **Add Projects:** Create new projects with a title and description using a controlled React form.
- **Real-Time Search:** Instantly filter projects as you type, matching keywords in either the project name or description (case-insensitive).
- **Responsive Enclosed Layout:** Built with flexible CSS Flexbox and fluid `clamp()` sizing so the form and project list sit side-by-side on desktop screens and stack neatly on mobile devices.
- **Zero External CSS Dependencies:** Styled completely using self-contained JavaScript inline style objects.

## Tech Stack

- **React** (Hooks: `useState`)
- **JavaScript (ES6+)**
- **Inline CSS / Flexbox**

## Project Structure

```text
├── public/
├── src/
│   ├── component/
│   ├── App.jsx              # Root application entry
│   └── main.jsx             # React DOM renderer
├── package.json
└── README.md
```

## Getting Started

Follow these steps to run the project locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com
cd your-repo-name
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
*(Note: If you used Create React App instead of Vite, run `npm start` instead.)*

Open the local URL shown in your terminal (usually `http://localhost:5173` or `http://localhost:3000`) to view the app in your browser.

## Deployment

This project is ready for deployment on platforms like **Vercel** or **Netlify**:
1. Push your code to a GitHub repository.
2. Import the repository into Vercel or Netlify.
3. Keep the default build command (`npm run build`) and deploy.

## Future Improvements

- Persist projects in `localStorage` so added items remain saved after a page refresh.
- Add delete and edit functionality for individual project cards.
