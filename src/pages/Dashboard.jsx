import React from "react";

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 Dashboard</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={card}>Income ₹5000</div>
        <div style={card}>Expense ₹1200</div>
        <div style={card}>Balance ₹3800</div>
      </div>
    </div>
  );
}

const card = {
  padding: "20px",
  background: "#eee",
  borderRadius: "10px",
};

export default Dashboard;