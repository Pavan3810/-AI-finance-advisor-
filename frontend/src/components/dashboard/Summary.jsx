import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Wallet, Layers, TrendingUp, PiggyBank } from "lucide-react";

function Summary() {
  const [data, setData] = useState(null);
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    const username = localStorage.getItem("username");

    axios
      .get(`http://127.0.0.1:8000/analytics/${username}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));

    axios
      .get(`http://127.0.0.1:8000/budget/${username}`)
      .then((res) => setBudget(res.data.budget))
      .catch((err) => console.log(err));
  }, []);

  if (!data) {
    return (
      <div className="loading-box">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
    );
  }

  const categories = Object.keys(data.category_breakdown);

  let highestCategory = "N/A";
  let highestAmount = 0;

  Object.entries(data.category_breakdown).forEach(([category, amount]) => {
    if (amount > highestAmount) {
      highestAmount = amount;
      highestCategory = category;
    }
  });

  const remainingBudget = budget - data.total_spending;

  return (
    <div className="summary-grid">
      <motion.div className="summary-card purple-card" whileHover={{ y: -5 }}>
        <div className="summary-icon">
          <Wallet size={28} />
        </div>
        <h4>Total Spending</h4>
        <h2>₹{data.total_spending}</h2>
      </motion.div>

      <motion.div className="summary-card blue-card" whileHover={{ y: -5 }}>
        <div className="summary-icon">
          <Layers size={28} />
        </div>
        <h4>Categories</h4>
        <h2>{categories.length}</h2>
      </motion.div>

      <motion.div className="summary-card green-card" whileHover={{ y: -5 }}>
        <div className="summary-icon">
          <TrendingUp size={28} />
        </div>
        <h4>Top Category</h4>
        <h2>{highestCategory}</h2>
      </motion.div>

      <motion.div className="summary-card orange-card" whileHover={{ y: -5 }}>
        <div className="summary-icon">
          <PiggyBank size={28} />
        </div>
        <h4>Remaining Budget</h4>
        <h2>₹{remainingBudget}</h2>
      </motion.div>
    </div>
  );
}

export default Summary;
