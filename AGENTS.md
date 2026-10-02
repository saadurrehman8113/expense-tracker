# Repository Guidelines

## Project Structure & Module Organization

This repository is a small React 19 application built with Vite. Application code and styles live in `src/`: `App.jsx` owns transaction state and add/delete handlers; `Summary.jsx` calculates totals; `SpendingChart.jsx` groups expenses by category and renders a Recharts bar chart; `TransactionForm.jsx` manages form input; and `TransactionList.jsx` filters and displays transactions. `main.jsx` is the browser entry point. Global styles are in `index.css` and `App.css`; static files belong in `public/`, and imported assets can go in `src/assets/`. Repository-specific agent skills live in `.agents/skills/`. There is no backend or test directory.

## Build, Test, and Development Commands

- `npm install` installs dependencies.
- `npm run dev` starts the local Vite server (normally at `http://localhost:5173`).
- `npm run build` creates the production bundle in `dist/`.
- `npm run preview` serves the production bundle locally.
- `npm run lint` runs ESLint across the repository.

No automated test framework or test script is configured. Run `npm run lint` and `npm run build` to validate changes. If adding a test framework, add tests and a corresponding package script.

## Coding Style & Naming Conventions

Use JavaScript ES modules and React function components with hooks. Name component files and components in PascalCase (for example, `TransactionForm.jsx`); use camelCase for functions, props, and local variables. Keep local form and filter state in their components; shared transactions remain in `App` and flow through props and callbacks. Follow the existing ESLint flat configuration, including React Hooks rules. No formatter is configured, so match nearby formatting and keep semicolon use consistent within each file.

## Testing Guidelines

For new tests, use `ComponentName.test.jsx`, colocated with the component or in a test directory, and document how to run them.

## Commit & Pull Request Guidelines

Recent commits use short, plain-language, action-oriented subjects (for example, `Added spending chart`). Keep commit subjects concise and descriptive; no stricter prefix convention is established. As a PR guideline, describe the user-visible or structural change and list validation performed. Link related issues and include screenshots for UI changes when applicable; no formal PR template is configured.

## Architecture Notes

Transactions live only in `App` state and reset on page refresh. Deleting a transaction uses browser confirmation; the summary and spending chart derive their values from the current transaction list. Preserve the parent-to-child props and callback flow when changing transaction behavior, and account for ephemeral state in persistence work.
