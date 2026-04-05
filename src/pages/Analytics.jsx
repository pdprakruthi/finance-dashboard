import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Food", amount: 500 },
  { name: "Salary", amount: 2000 },
  { name: "Transport", amount: 300 },
];

function Analytics() {
  return (
    <div className="card">
      <h2>Analytics</h2>

      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" />
      </BarChart>
    </div>
  );
}

export default Analytics;