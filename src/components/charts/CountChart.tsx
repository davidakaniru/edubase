"use client";
import { FaDotCircle } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "#fafafa",
  },
  {
    name: "Girls",
    count: 50,
    fill: "#fbc02d",
  },
  {
    name: "Boys",
    count: 50,
    fill: "#b2dfdb",
  },
];

const CountChart = () => {
  return (
    <div className="w-full lg:w-1/3 h-[450px] bg-light rounded-2xl p-4 flex flex-col">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg">Students</h1>
        <IoIosMore size={20} />
      </div>
      {/* CHART */}
      <div className="w-full h-8/10 flex items-center justify-center">
        <ResponsiveContainer className={`outline-none`}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="90%"
            barSize={20}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center items-center gap-16">
        <div className="flex flex-col gap-1">
          <FaDotCircle className="text-accent" />
          <p className="font-bold">1,234</p>
          <p className="text-xs text-gray-500">Boys (55%)</p>
        </div>
        <div className="flex flex-col gap-1">
          <FaDotCircle className="text-secondary" />
          <p className="font-bold">1,009</p>
          <p className="text-xs text-gray-500">Girls (45%)</p>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
