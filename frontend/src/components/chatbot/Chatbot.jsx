import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Wallet, BarChart3, PiggyBank } from "lucide-react";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const username = localStorage.getItem("username") || "User";

  const askQuestion = async (customQuestion = null) => {
    const finalQuestion = customQuestion || question;

    if (!finalQuestion.trim()) return;

    setLoading(true);
    setQuestion(finalQuestion);

    try {
      const res = await axios.post("http://127.0.0.1:8000/chat", {
        username,
        question: finalQuestion,
      });

      setResponse(res.data);

      setChatHistory((prev) => [
        ...prev,
        {
          question: finalQuestion,
          answer: res.data.response,
        },
      ]);
    } catch (error) {
      setResponse({
        response: "AI assistant unavailable.",
        total_spending: 0,
        top_category: "N/A",
        suggestions: [],
      });

      setChatHistory((prev) => [
        ...prev,
        {
          question: finalQuestion,
          answer: "AI assistant unavailable.",
        },
      ]);
    }

    setLoading(false);
  };

  const spending = response?.total_spending || 0;
  const savingsPotential = Math.floor(spending * 0.2);

  let healthScore = 90;
  let healthStatus = "Excellent";

  if (spending > 10000) {
    healthScore = 75;
    healthStatus = "Moderate";
  }

  if (spending > 30000) {
    healthScore = 50;
    healthStatus = "Risky";
  }

  return (
    <motion.div
      className="chat-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="chat-header">
        <p>Let's improve your financial health with AI insights.</p>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Ask about expenses, savings, budgeting..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={() => askQuestion()}>{loading ? "..." : "Ask"}</button>
      </div>

      <div className="suggestion-grid">
        <motion.div
          className="suggestion-card"
          whileHover={{ scale: 1.03, y: -5 }}
          onClick={() => askQuestion("How can I reduce expenses?")}
        >
          <h3>
            <Wallet size={24} />
            Reduce Expenses
          </h3>
          <p>Find ways to save more</p>
        </motion.div>

        <motion.div
          className="suggestion-card"
          whileHover={{ scale: 1.03, y: -5 }}
          onClick={() => askQuestion("Analyze my spending habits")}
        >
          <h3>
            <BarChart3 size={24} />
            Spending Analysis
          </h3>
          <p>Understand spending patterns</p>
        </motion.div>

        <motion.div
          className="suggestion-card"
          whileHover={{ scale: 1.03, y: -5 }}
          onClick={() => askQuestion("Suggest a savings plan")}
        >
          <h3>
            <PiggyBank size={24} />
            Savings Plan
          </h3>
          <p>Improve monthly savings</p>
        </motion.div>
      </div>

      <motion.div
        className="response-panel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2>AI Insights</h2>

        {loading ? (
          <div className="loading-box">
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
          </div>
        ) : response ? (
          <>
            <div className="ai-cards">
              <motion.div className="ai-card spend-card" whileHover={{ y: -5 }}>
                <span>Total Spending</span>
                <h3>₹{spending}</h3>
              </motion.div>

              <motion.div
                className="ai-card category-card"
                whileHover={{ y: -5 }}
              >
                <span>Top Category</span>
                <h3>{response.top_category || "N/A"}</h3>
              </motion.div>

              <motion.div
                className="ai-card savings-card"
                whileHover={{ y: -5 }}
              >
                <span>Savings Potential</span>
                <h3>₹{savingsPotential}</h3>
              </motion.div>

              <motion.div className="ai-card score-card" whileHover={{ y: -5 }}>
                <span>AI Health Score</span>
                <h3>{healthScore}/100</h3>
                <p>{healthStatus}</p>
              </motion.div>
            </div>

            <motion.div className="suggestions-box">
              <h3>Suggestions</h3>

              {response?.suggestions?.length > 0 ? (
                response.suggestions.map((tip, index) => (
                  <p key={index}>✔ {tip}</p>
                ))
              ) : (
                <p>No suggestions available yet.</p>
              )}
            </motion.div>

            <div className="chat-history">
              <h3>Conversation History</h3>

              {chatHistory.map((chat, index) => (
                <div key={index}>
                  <div className="user-bubble">
                    <strong>You:</strong> {chat.question}
                  </div>

                  <div className="ai-bubble">
                    <strong>AI:</strong> {chat.answer}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Ask something to get AI insights.</p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Chatbot;
