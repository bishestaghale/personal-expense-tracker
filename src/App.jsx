import { useState } from "react";
import TransactionForm from "./Components/TransactionForm";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  // 🔹 Calculate totals dynamically
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
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>💰 Personal Expense Tracker</h1>
      <p style={{ textAlign: "center" }}>Track your income and expenses easily.</p>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <h2>Balance</h2>
        <h2 style={{ fontWeight: "bold", color: "blue" }}>NPR {balance}</h2>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        <div>
          <h2>Income</h2>
          <h2 style={{ color: "green" }}>+ NPR {income}</h2>
        </div>

        <div>
          <h2>Expenses</h2>
          <h2 style={{ color: "red" }}>- NPR {expense}</h2>
        </div>
      </div>

      <TransactionForm onAddTransaction={addTransaction} />

      <h3 style={{ marginTop: "30px" }}>📜 Transactions</h3>
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.text} : {t.amount < 0 ? (
              <span style={{ color: "red" }}>{t.amount}</span>
            ) : (
              <span style={{ color: "green" }}>{t.amount}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
