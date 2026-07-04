import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function ExpenseForm() {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const username = localStorage.getItem("username");

  const addExpense = async () => {
    if (!category || !amount) return;

    try {
      await axios.post("http://127.0.0.1:8000/expenses", {
        username,
        category,
        amount: Number(amount),
      });

      setCategory("");
      setAmount("");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      className="expense-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>Add Expense</h2>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>
    </motion.div>
  );
}

export default ExpenseForm;
