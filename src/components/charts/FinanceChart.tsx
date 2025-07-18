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
    month: "Jan",
    income: 1200000,
    expenditure: 850000,
  },
  {
    month: "Feb",
    income: 1050000,
    expenditure: 780000,
  },
  {
    month: "Mar",
    income: 1300000,
    expenditure: 1000000,
  },
  {
    month: "Apr",
    income: 1150000,
    expenditure: 900000,
  },
  {
    month: "May",
    income: 1400000,
    expenditure: 1050000,
  },
  {
    month: "Jun",
    income: 1250000,
    expenditure: 970000,
  },
  {
    month: "Jul",
    income: 1100000,
    expenditure: 920000,
  },
  {
    month: "Aug",
    income: 1300000,
    expenditure: 1020000,
  },
  {
    month: "Sep",
    income: 1200000,
    expenditure: 950000,
  },
  {
    month: "Oct",
    income: 1350000,
    expenditure: 1000000,
  },
  {
    month: "Nov",
    income: 1100000,
    expenditure: 870000,
  },
  {
    month: "Dec",
    income: 1500000,
    expenditure: 1200000,
  },
];

const FinanceChart = () => {
  return (
    <div className="w-full h-[500px] bg-light rounded-2xl p-4 flex flex-col justify-between">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg">Finance</h1>
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
            <XAxis dataKey="month" tickLine={false} />
            <YAxis tickLine={false} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#00796b"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="expenditure" stroke="#fbc02d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinanceChart;
