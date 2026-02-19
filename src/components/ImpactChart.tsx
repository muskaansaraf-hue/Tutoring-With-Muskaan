import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Fall 2024", students: 45, projects: 8 },
  { name: "Winter 2025", students: 72, projects: 14 },
  { name: "Spring 2025", students: 110, projects: 22 },
  { name: "Summer 2025", students: 150, projects: 30 },
];

export function ImpactChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#64748b" }} />
          <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              fontSize: "14px",
            }}
          />
          <Bar dataKey="students" fill="#2563eb" radius={[4, 4, 0, 0]} name="Students" />
          <Bar dataKey="projects" fill="#16a34a" radius={[4, 4, 0, 0]} name="Projects" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
