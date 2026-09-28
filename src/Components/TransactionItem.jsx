function TransactionList({ transactions = [], onDelete }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h3 style={{ textAlign: "center" }}>📜 Your Transactions</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {transactions.map((t) => (
          <li
            key={t.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "10px 0",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              backgroundColor: t.amount < 0 ? "#ffe6e6" : "#e6ffe6",
            }}
          >
            <span style={{ fontWeight: "bold" }}>
              {t.text} :{" "}
              {t.amount < 0 ? (
                <span style={{ color: "red" }}>🔻 {t.amount}</span>
              ) : (
                <span style={{ color: "green" }}>🔺 {t.amount}</span>
              )}
            </span>
            <button
              onClick={() => onDelete(t.id)}
              style={{
                backgroundColor: "#ff4d4d",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              ❌ Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
