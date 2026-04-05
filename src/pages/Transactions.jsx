import React, { useState } from "react";

const initialData = [
  { id: 1, date: "2026-04-01", amount: 500, category: "Food", type: "expense" },
  { id: 2, date: "2026-04-02", amount: 2000, category: "Salary", type: "income" },
];

function Transactions() {
  const [transactions, setTransactions] = useState(initialData);

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  const handleAdd = () => {
    if (!form.date || !form.amount || !form.category) {
      alert("Fill all fields");
      return;
    }

    setTransactions([
      ...transactions,
      {
        id: transactions.length + 1,
        date: form.date,
        amount: Number(form.amount),
        category: form.category,
        type: form.type,
      },
    ]);

    setForm({
      date: "",
      amount: "",
      category: "",
      type: "expense",
    });
  };

  return (
    <div className="card">
      <h2>Transactions</h2>

      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />

      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />

      <input
        type="text"
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <select
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button onClick={handleAdd}>Add</button>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td className={t.type === "expense" ? "expense" : "income"}>
                ₹{t.amount}
              </td>
              <td>{t.category}</td>
              <td>{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
