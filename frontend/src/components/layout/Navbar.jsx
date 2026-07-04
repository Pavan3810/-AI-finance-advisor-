import { Bell, Search, Moon, Sun } from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  const username = localStorage.getItem("username") || "User";

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1>Dashboard</h1>
        <p>Welcome back, {username} 👋</p>
      </div>

      <div className="navbar-right">
        <div className="nav-search">
          <Search size={18} />
          <input type="text" placeholder="Search..." />
        </div>

        <div className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </div>

        <div className="notification-btn">
          <Bell size={20} />
        </div>

        <div className="profile-card">
          <div className="profile-circle">
            {username.charAt(0).toUpperCase()}
          </div>
          <span>{username}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
