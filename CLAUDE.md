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

The app uses a modular component architecture:

**Components:**
- **App.jsx** (container): Manages transactions state, passes data to child components
  - State: `transactions` (array of transaction objects)
  - Handler: `handleAddTransaction(transactionData)` — creates transaction with auto-generated id and passes to child
  - Renders: Summary, TransactionForm, TransactionList

- **Summary.jsx**: Displays income, expenses, balance summary cards
  - Props: `transactions`
  - Internally calculates: `totalIncome`, `totalExpenses`, `balance`
  - No state

- **TransactionForm.jsx**: Form for adding new transactions
  - Props: `onAddTransaction(transactionData)` callback
  - State: `description`, `amount`, `type`, `category` (manages own form state)
  - On submit, calls `onAddTransaction` with formatted data and clears form

- **TransactionList.jsx**: Displays transaction table with type/category filters
  - Props: `transactions`
  - State: `filterType`, `filterCategory` (manages own filters)
  - Internally filters and displays transactions in a table

**Data flow:**
- Transactions stored in App state (currently ephemeral—lost on refresh)
- Components are self-contained; each manages its own local state
- Parent-to-child communication via props; child-to-parent via callbacks
- Amounts are stored as numbers (fixed from initial string bug)

**Styling:** App.css (single stylesheet)

## Known Areas for Improvement

- **Data persistence**: Transactions disappear on page refresh; consider localStorage or backend API
- **Styling**: Basic CSS; could benefit from a utility-first framework (Tailwind) or CSS-in-JS
- **Type safety**: No TypeScript; consider adding for larger refactors
- **Delete/Edit transactions**: Currently no way to modify or remove transactions
- **Validation**: Form validation is minimal; could add more comprehensive checks
- **Testing**: No tests; consider adding unit tests for components and integration tests

## Technologies

- **React 19.2** with React Hooks
- **Vite 7.3** for fast development and optimized builds
- **ESLint** for code quality (run `npm run lint`)
