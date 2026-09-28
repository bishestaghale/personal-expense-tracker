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
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        marginBottom: "20px",
      }}
    >
      <div style={{ marginBottom: "10px" }}>
        <label style={{ fontWeight: "bold" }}>📝 Transaction Name</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter transaction..."
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label style={{ fontWeight: "bold" }}>💵 Amount (use - for expense)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..."
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        ➕ Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;
