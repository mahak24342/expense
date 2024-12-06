import React, { useState } from "react";
import { useAddTransaction } from "../hooks/useAddTransaction";
import { useGetTransactions } from "../hooks/useGetTransactions";

function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    type: "expense",
    title: "",
    amount: "",
  });

  const { addTransaction } = useAddTransaction();
  const { transactionns } = useGetTransactions();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addTransactionnn = (e) => {
    e.preventDefault();
    const { type, title, amount } = formData;

    if (title && amount) {
      setTransactions([
        ...transactions,
        { ...formData, id: Date.now(), amount: parseFloat(amount) },
      ]);
      setFormData({ type: "expense", title: "", amount: "" });
    }

    addTransaction({
      type,
      title,
      amount: parseFloat(amount),
    });
  };

  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalBalance = totalIncome - totalExpenses;

  return (
    <div className="min-h-screen bg-yellow-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
        Your Expense Tracker 
        </h1>

        {/* Add Transaction Form */}
        <form onSubmit={addTransactionnn} className="mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Type
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter title"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Amount
              </label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition"
          >
            Add Transaction
          </button>
        </form>

        {/* Transactions List */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Transactions
          </h2>
          {transactionns.length > 0 ? (
            <ul className="space-y-3 max-h-64 overflow-y-auto">
              {transactionns.map((transaction) => (
                <li
                  key={transaction.id}
                  className={`flex justify-between items-center p-3 rounded-lg shadow-sm ${
                    transaction.type === "income" ? "bg-green-50" : "bg-red-50"
                  }`}
                >
                  <span className="font-medium text-gray-800">
                    {transaction.title}
                  </span>
                  <span
                    className={`${
                      transaction.type === "income"
                        ? "text-green-600"
                        : "text-red-600"
                    } font-semibold`}
                  >
                    {transaction.type === "income" ? "+" : "-"}₹
                    {transaction.amount}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-center">
              No transactions added yet.
            </p>
          )}
        </div>

        {/* Total Balance */}
        <div className="mt-6 p-4 bg-indigo-100 rounded-lg text-center">
          <h2 className="text-xl font-bold text-gray-800">Total Balance</h2>
          <p className="text-2xl font-extrabold text-indigo-600">
            ₹{totalBalance.toFixed(2)}
          </p>
          <div className="text-sm mt-2 text-gray-600">
            Income: ₹{totalIncome.toFixed(2)} | Expenses: ₹{totalExpenses.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTracker;
