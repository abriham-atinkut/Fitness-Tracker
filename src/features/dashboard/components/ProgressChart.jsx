import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ProgressChart({ activity, selectedExercise }) {
  const data = activity
    .filter((ex) => ex.selectedWorkout === selectedExercise)
    .map((ex) => ({
      date: ex.date,
      weight: Number(ex.weight),
    }))
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  console.log("chart data", data);
  console.log("activity in chart", activity);
  if (data.length === 0) {
    return <div>No data for this exercise</div>;
  }

  return (
    <div className="m-4">
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={(date) => date.slice(5)} />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937", // dark gray
                border: "1px solid #374151",
                color: "#fff",
              }}
            />
            <Line type="monotone" dataKey="weight" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ProgressChart;
