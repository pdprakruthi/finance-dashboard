import React from "react";

function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2>💰 Finance</h2>

      <button onClick={() => setPage("dashboard")}>
        Dashboard
      </button>

      <button onClick={() => setPage("transactions")}>
        Transactions
      </button>

      <button onClick={() => setPage("analytics")}>
        Analytics
      </button>
    </div>
  );
}

export default Sidebar;