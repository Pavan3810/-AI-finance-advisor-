import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Analytics() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem("username");

    axios
      .get(`http://127.0.0.1:8000/analytics/${username}`)
      .then((res) => setData(res.data))
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

  const categories = Object.entries(data.category_breakdown);

  return (
    <motion.div
      className="analytics-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>Spending Overview</h2>

      <div className="analytics-list">
        {categories.map(([category, amount], index) => {
          const percentage = ((amount / data.total_spending) * 100).toFixed(1);

          return (
            <motion.div
              key={index}
              className="analytics-item"
              whileHover={{ scale: 1.01 }}
            >
              <div className="analytics-row">
                <span>{category}</span>
                <span>₹{amount}</span>
              </div>

              <div className="analytics-percentage">{percentage}%</div>

              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 0.8 }}
                ></motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Analytics;
