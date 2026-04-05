import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";
import "./App.css";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="layout">
      <Sidebar setPage={setPage} />

      <div className="content">
        {page === "dashboard" && <Dashboard setPage={setPage} />}
        {page === "transactions" && <Transactions />}
        {page === "analytics" && <Analytics />}
      </div>
    </div>
  );
}

/* ===== DASHBOARD (WELCOME UI) ===== */
function Dashboard({ setPage }) {
  return (
    <div className="dashboard-home">
      <h1>👋 Welcome Back!</h1>

      <p className="subtitle">
        Manage your finances smartly and track your expenses easily.
      </p>

      <div className="welcome-box">
        <h2>💡 Tip of the Day</h2>
        <p>
          Track your daily expenses to understand where your money goes.
          Small savings today can make a big difference tomorrow!
        </p>
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>

        <div className="actions">
          <button onClick={() => setPage("transactions")}>
            ➕ Add Transaction
          </button>

          <button onClick={() => setPage("analytics")}>
            📊 View Analytics
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;