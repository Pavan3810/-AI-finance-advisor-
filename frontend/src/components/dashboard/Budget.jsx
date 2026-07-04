import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Budget() {
  const username = localStorage.getItem("username");
  const [budget, setBudget] = useState("");
  const [savedBudget, setSavedBudget] = useState(0);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/budget/${username}`)
      .then((res) => setSavedBudget(res.data.budget))
      .catch((err) => console.log(err));
  }, []);

  const saveBudget = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/budget", null, {
        params: {
          username,
          budget: Number(budget),
        },
      });

      setSavedBudget(Number(budget));
      setBudget("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      className="budget-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>Monthly Budget</h2>

      <h3>Current Budget: ₹{savedBudget}</h3>

      <input
        type="number"
        placeholder="Set Monthly Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />

      <button onClick={saveBudget}>Save Budget</button>
    </motion.div>
  );
}

export default Budget;
