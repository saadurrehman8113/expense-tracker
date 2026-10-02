import { useState } from 'react'
import './App.css'
import Summary from './Summary'
import SpendingChart from './SpendingChart'
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, description: "Salary", amount: 5000, type: "income", category: "salary", date: "2025-01-01" },
    { id: 2, description: "Rent", amount: 1200, type: "expense", category: "housing", date: "2025-01-02" },
    { id: 3, description: "Groceries", amount: 150, type: "expense", category: "food", date: "2025-01-03" },
    { id: 4, description: "Freelance Work", amount: 800, type: "expense", category: "salary", date: "2025-01-05" },
    { id: 5, description: "Electric Bill", amount: 95, type: "expense", category: "utilities", date: "2025-01-06" },
    { id: 6, description: "Dinner Out", amount: 65, type: "expense", category: "food", date: "2025-01-07" },
    { id: 7, description: "Gas", amount: 45, type: "expense", category: "transport", date: "2025-01-08" },
    { id: 8, description: "Netflix", amount: 15, type: "expense", category: "entertainment", date: "2025-01-10" },
  ]);

  const handleAddTransaction = (transactionData) => {
    const newTransaction = {
      id: Date.now(),
      ...transactionData,
    };
    setTransactions([...transactions, newTransaction]);
  };

  const handleDeleteTransaction = (transaction) => {
    const confirmed = window.confirm(`Delete transaction "${transaction.description}"?`);
    if (!confirmed) return;

    setTransactions((currentTransactions) =>
      currentTransactions.filter((currentTransaction) => currentTransaction.id !== transaction.id)
    );
  };


  return (
    <main className="app-shell">
      <header className="app-header">
        <div className="brand-lockup">
          <div className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div>
            <h1>Finance Tracker</h1>
            <p className="subtitle">A clear view of your money</p>
          </div>
        </div>
      </header>

      <Summary transactions={transactions} />

      <div className="overview-grid">
        <SpendingChart transactions={transactions} />
        <TransactionForm onAddTransaction={handleAddTransaction} />
      </div>

      <TransactionList
        transactions={transactions}
        onDeleteTransaction={handleDeleteTransaction}
      />
    </main>
  );
}

export default App
