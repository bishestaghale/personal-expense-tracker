import { useState } from "react";

function TransactionForm({ onAddTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount) {
      alert("Please enter both text and amount");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
    };

    onAddTransaction(newTransaction);

    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Transaction Name</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter transaction..."
        />
      </div>

      <div>
        <label>Amount (use - for expense)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..."
        />
      </div>

      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
