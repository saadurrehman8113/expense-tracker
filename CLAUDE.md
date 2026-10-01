# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start

```bash
npm install
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Production build
npm run lint       # Run ESLint
```

## Project Overview

**Finance Tracker** is a React + Vite expense tracking app designed as a learning project. The codebase intentionally has bugs, poor styling, and monolithic structure that need refactoring—this is the starting point for improving the app throughout development.

## Architecture

Currently, the app is a single-component architecture:

- **App.jsx** (main): Single component managing all state (transactions, form inputs, filters). State includes:
  - `transactions`: Array of transaction objects with id, description, amount, type (income/expense), category, date
  - Form state: `description`, `amount`, `type`, `category`
  - Filter state: `filterType`, `filterCategory`
  - Derived state: `totalIncome`, `totalExpenses`, `balance` (calculated from transactions)

**Data flow:**
- Transactions stored in React state (currently ephemeral—lost on refresh)
- Add form submits new transactions and resets form
- Filters apply synchronously to displayed transaction list

**Styling:** App.css (single stylesheet)

## Known Areas for Improvement

- **Component splitting**: Transaction table, add form, summary cards, and filters could be extracted into reusable components
- **State management**: Currently all state in App. Consider extracting context or custom hooks as app grows
- **Data persistence**: Transactions disappear on page refresh; consider localStorage or backend
- **Styling**: Basic CSS; could benefit from a component-based approach or utility-first framework
- **Type safety**: No TypeScript; consider adding for larger refactors
- **Amount handling**: Amounts stored as strings; should be numbers to prevent calculation bugs

## Technologies

- **React 19.2** with React Hooks
- **Vite 7.3** for fast development and optimized builds
- **ESLint** for code quality (run `npm run lint`)
