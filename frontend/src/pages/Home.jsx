import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Chatbot from "../components/chatbot/Chatbot";
import Summary from "../components/dashboard/Summary";
import Recommendation from "../components/dashboard/Recommendation";
import Analytics from "../components/dashboard/Analytics";
import ExpenseForm from "../components/expenses/ExpenseForm";
import ExpenseList from "../components/expenses/ExpenseList";
import Budget from "../components/dashboard/Budget";
function Home({ darkMode, setDarkMode }) {
  const [activePage, setActivePage] = useState("chat");

  const renderPage = () => {
    switch (activePage) {
      case "chat":
        return <Chatbot />;

      case "dashboard":
        return (
          <>
            <Summary />
            <Budget />
            <Recommendation />
          </>
        );

      case "expenses":
        return (
          <div className="expense-grid">
            <ExpenseForm />
            <ExpenseList />
          </div>
        );

      case "budget":
        return <Analytics />;

      default:
        return <Chatbot />;
    }
  };

  return (
    <div className="app-layout">
      <div className="bg-blob blob1"></div>
      <div className="bg-blob blob2"></div>
      <div className="bg-blob blob3"></div>

      <Sidebar setActivePage={setActivePage} activePage={activePage} />

      <div className="main-content">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        {renderPage()}
      </div>
    </div>
  );
}

export default Home;
