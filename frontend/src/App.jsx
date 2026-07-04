import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );

  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const username = localStorage.getItem("username");

  if (username) {
    return <Home darkMode={darkMode} setDarkMode={setDarkMode} />;
  }

  return showRegister ? (
    <Register setShowRegister={setShowRegister} />
  ) : (
    <Login setShowRegister={setShowRegister} />
  );
}

export default App;
