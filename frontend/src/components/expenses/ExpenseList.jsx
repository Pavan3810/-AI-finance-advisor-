import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);
  const [newCategory, setNewCategory] = useState("");
  const [newAmount, setNewAmount] = useState("");

  const username = localStorage.getItem("username");

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = () => {
    axios
      .get(`http://127.0.0.1:8000/expenses/${username}`)
      .then((res) => setExpenses(res.data))
      .catch((err) => console.log(err));
  };

  const deleteExpense = async (expense) => {
    try {
      await axios.delete("http://127.0.0.1:8000/expenses", {
        params: {
          username,
          category: expense.category,
          amount: expense.amount,
        },
      });

      fetchExpenses();
    } catch (error) {
      console.log(error);
    }
  };

  const openEditModal = (expense) => {
    setEditingExpense(expense);
    setNewCategory(expense.category);
    setNewAmount(expense.amount);
  };

  const updateExpense = async () => {
    try {
      await axios.put("http://127.0.0.1:8000/expenses", null, {
        params: {
          username,
          old_category: editingExpense.category,
          old_amount: editingExpense.amount,
          new_category: newCategory,
          new_amount: Number(newAmount),
        },
      });

      setEditingExpense(null);
      fetchExpenses();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <motion.div
        className="expense-card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2>Recent Expenses</h2>

        <div className="expense-list">
          {expenses.length === 0 ? (
            <p>No expenses found.</p>
          ) : (
            expenses.map((expense, index) => (
              <motion.div
                key={index}
                className="expense-item"
                whileHover={{ x: 5 }}
              >
                <div className="expense-left">
                  <div className="expense-badge">
                    {expense.category.charAt(0)}
                  </div>

                  <div>
                    <h4>{expense.category}</h4>
                    <p>Expense #{index + 1}</p>
                  </div>
                </div>

                <div className="expense-actions">
                  <span className="expense-amount">₹{expense.amount}</span>

                  <button
                    className="edit-btn"
                    onClick={() => openEditModal(expense)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteExpense(expense)}
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>

      {editingExpense && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Edit Expense</h2>

            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            >
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Shopping">Shopping</option>
              <option value="Bills">Bills</option>
              <option value="Entertainment">Entertainment</option>
            </select>

            <input
              type="number"
              value={newAmount}
              onChange={(e) => setNewAmount(e.target.value)}
            />

            <div className="modal-buttons">
              <button className="save-btn" onClick={updateExpense}>
                Save
              </button>

              <button
                className="cancel-btn"
                onClick={() => setEditingExpense(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ExpenseList;
