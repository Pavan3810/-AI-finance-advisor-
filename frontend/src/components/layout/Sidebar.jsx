import {
  Bot,
  MessageCircle,
  LayoutDashboard,
  Wallet,
  BadgeDollarSign,
  LogOut,
} from "lucide-react";

function Sidebar({ setActivePage, activePage }) {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Bot size={34} className="logo-icon" />
        <div>
          <h2>AI Finance</h2>
          <p>Assistant</p>
        </div>
      </div>

      <ul className="sidebar-menu">
        <li
          className={activePage === "chat" ? "active-menu" : ""}
          onClick={() => setActivePage("chat")}
        >
          <MessageCircle size={20} />
          <span>Chat</span>
        </li>

        <li
          className={activePage === "dashboard" ? "active-menu" : ""}
          onClick={() => setActivePage("dashboard")}
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </li>

        <li
          className={activePage === "expenses" ? "active-menu" : ""}
          onClick={() => setActivePage("expenses")}
        >
          <Wallet size={20} />
          <span>Expenses</span>
        </li>

        <li
          className={activePage === "budget" ? "active-menu" : ""}
          onClick={() => setActivePage("budget")}
        >
          <BadgeDollarSign size={20} />
          <span>Budget</span>
        </li>
      </ul>

      <button
        className="logout-btn"
        onClick={() => {
          localStorage.removeItem("username");
          window.location.reload();
        }}
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
