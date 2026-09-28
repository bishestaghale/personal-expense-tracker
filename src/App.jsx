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

  <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
  <div style={{ backgroundColor: "#e6f7ff", padding: "15px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
    <h3 style={{ margin: 0, color: "#0073e6" }}>💳 Balance</h3>
    <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>NPR {balance}</p>
  </div>

  <div style={{ backgroundColor: "#e6ffe6", padding: "15px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
    <h3 style={{ margin: 0, color: "green" }}>📈 Income</h3>
    <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>NPR {income}</p>
  </div>

  <div style={{ backgroundColor: "#ffe6e6", padding: "15px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
    <h3 style={{ margin: 0, color: "red" }}>📉 Expenses</h3>
    <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>NPR {expense}</p>
  </div>
</div>

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
