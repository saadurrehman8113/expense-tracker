import { useState } from 'react';

function TransactionList({ transactions, onDeleteTransaction }) {
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  const categories = ["food", "housing", "utilities", "transport", "entertainment", "salary", "other"];

  let filteredTransactions = transactions;
  if (filterType !== "all") {
    filteredTransactions = filteredTransactions.filter(t => t.type === filterType);
  }
  if (filterCategory !== "all") {
    filteredTransactions = filteredTransactions.filter(t => t.category === filterCategory);
  }

  return (
    <section className="transactions" aria-labelledby="transactions-title">
      <div className="transactions-heading">
        <div>
          <h2 id="transactions-title">Transactions</h2>
          <p className="transaction-count" aria-live="polite">
            {filteredTransactions.length} {filteredTransactions.length === 1 ? 'entry' : 'entries'}
          </p>
        </div>
        <div className="filters" role="group" aria-label="Filter transactions">
          <select aria-label="Filter by type" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
            <option value="all">All types</option>
            <option value="income">Income</option>
            <option value="expense">Expenses</option>
          </select>
          <select aria-label="Filter by category" value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
            <option value="all">All categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.length === 0 ? (
              <tr>
                <td className="table-empty" colSpan="5">
                  {transactions.length === 0
                    ? 'No transactions yet. Add one above to get started.'
                    : 'No transactions match these filters.'}
                </td>
              </tr>
            ) : filteredTransactions.map(t => (
              <tr key={t.id}>
                <td className="transaction-date">{t.date}</td>
                <td>{t.description}</td>
                <td><span className="category-tag">{t.category}</span></td>
                <td className={`transaction-amount ${t.type === "income" ? "income-amount" : "expense-amount"}`}>
                  {t.type === "income" ? "+" : "-"}${t.amount}
                </td>
                <td>
                  <button
                    type="button"
                    className="delete-btn"
                    aria-label={`Delete ${t.description}`}
                    onClick={() => onDeleteTransaction(t)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TransactionList;
