function Summary({ transactions }) {
  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;
  const formatCurrency = (amount) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);

  return (
    <section className="summary" aria-label="Financial summary">
      <article className="summary-card summary-card--balance">
        <h2>Available balance</h2>
        <p className="summary-value">{formatCurrency(balance)}</p>
      </article>
      <article className="summary-card summary-card--income">
        <h2>Income</h2>
        <p className="summary-value">{formatCurrency(totalIncome)}</p>
      </article>
      <article className="summary-card summary-card--expenses">
        <h2>Expenses</h2>
        <p className="summary-value">{formatCurrency(totalExpenses)}</p>
      </article>
    </section>
  );
}

export default Summary;
