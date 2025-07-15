"use client";

import { IoIosMore } from "react-icons/io";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    day: "Mon",
    present: 87,
    absent: 13,
  },
  {
    day: "Tues",
    present: 71,
    absent: 29,
  },
  {
    day: "Wed",
    present: 85,
    absent: 15,
  },
  {
    day: "Thur",
    present: 90,
    absent: 10,
  },
  {
    day: "Fri",
    present: 40,
    absent: 60,
  },
];

const AttendanceChart = () => {
  return (
    <div className="w-full lg:w-2/3 h-[450px] bg-light rounded-2xl p-4 flex flex-col justify-between">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg">Attendance</h1>
        <IoIosMore size={20} />
      </div>
      {/* CHART */}
      <div className="w-full h-9/10">
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="present"
              stroke="#00796b"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="absent" stroke="#fbc02d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
