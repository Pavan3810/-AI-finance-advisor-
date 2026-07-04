import { useState } from "react";
import axios from "axios";
import "./auth.css";

function Login({ setShowRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/login", {
        username,
        password,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("token", res.data.access_token);

      window.location.reload();
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>AI Finance Assistant</h1>
        <p>Login to continue</p>

        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>

        <div className="auth-switch">
          Don’t have an account?{" "}
          <span onClick={() => setShowRegister(true)}>Register</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
