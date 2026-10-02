import { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("food");

  const categories = ["food", "housing", "utilities", "transport", "entertainment", "salary", "other"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    onAddTransaction({
      description,
      amount: Number(amount),
      type,
      category,
      date: new Date().toISOString().split('T')[0],
    });

    setDescription("");
    setAmount("");
    setType("expense");
    setCategory("food");
  };

  return (
    <section className="add-transaction" aria-labelledby="add-transaction-title">
      <div className="section-heading">
        <div>
          <h2 id="add-transaction-title">Add a transaction</h2>
          <p>Record money in or out.</p>
        </div>
      </div>
      <form className="transaction-form" onSubmit={handleSubmit}>
        <label htmlFor="transaction-description">Description</label>
        <input
          id="transaction-description"
          type="text"
          placeholder="e.g. Weekly groceries"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="transaction-amount">Amount</label>
        <input
          id="transaction-amount"
          type="number"
          placeholder="0.00"
          min="0.01"
          step="0.01"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label htmlFor="transaction-type">Type</label>
        <select id="transaction-type" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <label htmlFor="transaction-category">Category</label>
        <select id="transaction-category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button className="add-button" type="submit">Add transaction</button>
      </form>
    </section>
  );
}

export default TransactionForm;
