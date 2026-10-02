# Repository Guidelines

## Project Structure & Module Organization

This repository is a small React 19 application built with Vite. Application code and styles live in `src/`: `App.jsx` owns transaction state, while `Summary.jsx`, `TransactionForm.jsx`, and `TransactionList.jsx` render focused parts of the interface. `main.jsx` is the browser entry point. Global styles are in `index.css` and `App.css`; static files belong in `public/`, and imported assets can go in `src/assets/`. There is currently no test directory or backend.

## Build, Test, and Development Commands

- `npm install` installs dependencies.
- `npm run dev` starts the local Vite server (normally at `http://localhost:5173`).
- `npm run build` creates the production bundle in `dist/`.
- `npm run preview` serves the production bundle locally.
- `npm run lint` runs ESLint across the repository.

No automated test framework or test script is configured. Run the linter and production build when validating a change; add tests and a test script if introducing a test framework.

## Coding Style & Naming Conventions

Use JavaScript ES modules and React function components with hooks. Name component files and components in PascalCase (for example, `TransactionForm.jsx`); use camelCase for functions, props, and local variables. Keep component state close to the component that owns it, and pass shared data or callbacks through props. Follow the existing ESLint flat configuration, including React Hooks rules. There is no formatter configured, so keep formatting consistent with nearby code and use semicolons consistently within files.

## Testing Guidelines

Tests are not currently present. If adding them, use a clear convention such as `ComponentName.test.jsx`, colocated with the component or in a dedicated test directory, and document the command used to run them.

## Commit & Pull Request Guidelines

Recent commits use short, plain-language summaries, generally phrased as actions (for example, “Refactored the code for separation of concerns.”). Keep commit subjects concise and descriptive; no stricter prefix convention is established. Pull requests should explain the user-visible or structural change, list validation performed (such as `npm run lint` and `npm run build`), link related issues when applicable, and include screenshots for UI changes.

## Architecture Notes

Transactions currently live only in `App` state and reset on page refresh. Preserve the parent-to-child props and callback flow when changing the UI, and account for this in any work involving persistence or transaction updates.
