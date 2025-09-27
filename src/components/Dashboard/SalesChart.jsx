const data = [
  { name: "Electronic", value: 45, color: "#3b82f6" },
  { name: "Clothing", value: 35, color: "#8b5cf6" },
  { name: "Book", value: 15, color: "#10b981" },
  { name: "Other", value: 10, color: "#f59e0b" },
];

function SalesChart() {
  return (
    <div className="bg-white dark:bg-slate-900 backdrop-blur-xl rounded-b-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">
          Sales by Category
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Production Distribution
        </p>
      </div>
      <div className="h-48"></div>
    </div>
  );
}

export default SalesChart;
