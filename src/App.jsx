import { useState } from "react";
import TransactionForm from "./Components/TransactionForm";
import TransactionList from "./Components/TransactionList";
import ExpenseChart from "./Components/ExpenseChart";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  // Totals calculation
  const amounts = transactions.map((t) => t.amount);
  const balance = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);

  // Filter & Sort Logic
  let displayedTransactions = [...transactions];
  if (filter === "income") {
    displayedTransactions = transactions.filter((t) => t.amount > 0);
  } else if (filter === "expense") {
    displayedTransactions = transactions.filter((t) => t.amount < 0);
  } else if (filter === "sortAmount") {
    displayedTransactions.sort((a, b) => a.amount - b.amount);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Header Banner */}
      <div
        style={{
          backgroundColor: "#760808",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "2.5rem",
            color: "#e6d9d9",
            fontFamily: "Trebuchet MS, sans-serif",
          }}
        >
          💰 Personal Expense Tracker
        </h1>
        <p
          style={{
            marginTop: "10px",
            fontStyle: "italic",
            color: "#e09494",
            fontSize: "1.1rem",
          }}
        >
          Manage your money smartly ✨
        </p>
      </div>

      {/* Totals Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <div style={{ backgroundColor: "#e6f7ff", padding: "15px", borderRadius: "10px" }}>
          <h3 style={{ margin: 0, color: "#0073e6" }}>💳 Balance</h3>
          <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>NPR {balance}</p>
        </div>

        <div style={{ backgroundColor: "#e6ffe6", padding: "15px", borderRadius: "10px" }}>
          <h3 style={{ margin: 0, color: "green" }}>📈 Income</h3>
          <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>NPR {income}</p>
        </div>

        <div style={{ backgroundColor: "#ffe6e6", padding: "15px", borderRadius: "10px" }}>
          <h3 style={{ margin: 0, color: "red" }}>📉 Expenses</h3>
          <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>NPR {expense}</p>
        </div>
      </div>

      {/* Chart Section */}
      <ExpenseChart income={income} expense={expense} />

      {/* Filter Buttons */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={() => setFilter("all")} style={{ margin: "5px" }}>All</button>
        <button onClick={() => setFilter("income")} style={{ margin: "5px" }}>Income</button>
        <button onClick={() => setFilter("expense")} style={{ margin: "5px" }}>Expenses</button>
        <button onClick={() => setFilter("sortAmount")} style={{ margin: "5px" }}>Sort by Amount</button>
      </div>

      {/* Form + List */}
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionList transactions={displayedTransactions} onDelete={deleteTransaction} />
    </div>
  );
}

export default App;
