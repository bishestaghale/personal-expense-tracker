import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart({ income, expense }) {
  const data = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        data: [income, expense],
        backgroundColor: ["#4CAF50", "#FF4D4D"],
        hoverBackgroundColor: ["#45a049", "#e60000"],
      },
    ],
  };

  return (
    <div style={{ width: "300px", margin: "0 auto", marginBottom: "30px" }}>
      <h3 style={{ textAlign: "center" }}>📊 Income vs Expenses</h3>
      <Pie data={data} />
    </div>
  );
}

export default ExpenseChart;
