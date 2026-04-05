import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const Insights = () => {
  const data = [
    { category: "Salary", amount: 2000 },
    { category: "Food", amount: 500 },
    { category: "Shopping", amount: 700 },
  ];

  // Calculate highest spending
  const highest = data.reduce((max, item) =>
    item.amount > max.amount ? item : max
  );

  return (
    <div className="p-6">
      <h2>Insights</h2>

      {/* Insight Text */}
      <p>
        Highest Spending Category: <b>{highest.category}</b> (₹{highest.amount})
      </p>

      {/* Chart */}
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" />
      </BarChart>
    </div>
  );
};

export default Insights;