import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

function SpendingChart({ transactions }) {
  const spendingByCategory = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((totals, transaction) => {
      totals[transaction.category] = (totals[transaction.category] || 0) + transaction.amount;
      return totals;
    }, {});

  const chartData = Object.entries(spendingByCategory)
    .map(([category, amount]) => ({ category, amount }))
    .filter((item) => item.amount > 0);

  return (
    <section className="expense-chart-card" aria-labelledby="expense-chart-title">
      <h2 id="expense-chart-title">Spending by Category</h2>
      {chartData.length > 0 ? (
        <div className="expense-chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 8, right: 16, left: 4, bottom: 8 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="category"
                axisLine={false}
                tickLine={false}
                tickMargin={8}
              />
              <YAxis
                tickFormatter={(value) => `$${Number(value).toLocaleString()}`}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Spent']} />
              <Bar dataKey="amount" fill="#4f46e5" radius={[4, 4, 0, 0]} maxBarSize={48} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="expense-chart-empty">No expenses to chart yet.</p>
      )}
    </section>
  );
}

export default SpendingChart;
