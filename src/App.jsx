import { useState } from "react";
import TransactionForm from "./Components/TransactionForm";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div>
      <h1>Personal Expense Tracker</h1>
      <p>Track your income and expenses easily.</p>

      <div>
        <h2>Balance</h2>
        <h2>NPR 0</h2>
      </div>

      <div>
        <h2>Income</h2>
        <h2>NPR 0</h2>
      </div>

      <div>
        <h2>Expenses</h2>
        <h2>NPR 0</h2>
      </div>

      {/* New Transaction Form */}
      <TransactionForm onAddTransaction={addTransaction} />

      {/* Debug: show transactions */}
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.text} : {t.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
