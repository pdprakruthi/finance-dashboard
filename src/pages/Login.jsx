import React, { useState } from "react";

function Login({ setIsAuth }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (user === "admin" && pass === "1234") {
      setIsAuth(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Login</h2>

        <input placeholder="Username" onChange={(e) => setUser(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;