import { useState } from "react";

const SummaryCard = () => {
  const [transactions] = useState([
    { amount: 5000, type: "income" },
    { amount: 200, type: "expense" },
    { amount: 1000, type: "expense" },
  ]);

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      <div className="p-4 bg-green-100 rounded shadow">
        <h3 className="text-lg font-semibold">Income</h3>
        <p>₹{income}</p>
      </div>

      <div className="p-4 bg-red-100 rounded shadow">
        <h3 className="text-lg font-semibold">Expense</h3>
        <p>₹{expense}</p>
      </div>

      <div className="p-4 bg-blue-100 rounded shadow">
        <h3 className="text-lg font-semibold">Balance</h3>
        <p>₹{balance}</p>
      </div>
    </div>
  );
};

export default SummaryCard;