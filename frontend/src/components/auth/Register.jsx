import { useState } from "react";
import axios from "axios";
import "./auth.css";

function Register({ setShowRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/register", {
        username,
        password,
      });

      alert("Registered successfully");
      setShowRegister(false);
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>AI Finance Assistant</h1>
        <p>Create account</p>

        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={register}>Register</button>

        <div className="auth-switch">
          Already have an account?{" "}
          <span onClick={() => setShowRegister(false)}>Login</span>
        </div>
      </div>
    </div>
  );
}

export default Register;
