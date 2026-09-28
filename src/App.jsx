import { useState } from "react";
import TransactionForm from "./Components/TransactionForm";
import TransactionList from "./Components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState([]);

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


  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
<div
  style={{
    backgroundColor: "#FFD700",
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
      color: "#333",
      fontFamily: "Trebuchet MS, sans-serif",
    }}
  >
    💰 Personal Expense Tracker
  </h1>
  <p
    style={{
      marginTop: "10px",
      fontStyle: "italic",
      color: "#444",
      fontSize: "1.1rem",
    }}
  >
    Manage your money smartly ✨
  </p>
</div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
  <h2 style={{ color: "blue" }}>Balance: NPR {balance}</h2>
  <h3 style={{ color: "green" }}>Income: NPR {income}</h3>
  <h3 style={{ color: "red" }}>Expenses: NPR {expense}</h3>
</div>

      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionList transactions={transactions} onDelete={deleteTransaction} />
    </div>
  );
}

export default App;
