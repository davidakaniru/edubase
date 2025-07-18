"use client";

import { adminEvents } from "@/utils/events";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IoIosMore } from "react-icons/io";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-2xl">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg my-4">Events</h1>
        <IoIosMore size={20} />
      </div>
      <div className="flex flex-col gap-4">
        {adminEvents.map(({ id, description, time, title }) => (
          <div
            className="p-5 rounded-2xl border-2 border-gray-100 border-t-4 odd:border-t-primary even:border-t-secondary"
            key={id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-dark">{title}</h1>
              <span className="text-xs text-gray-400">{time}</span>
            </div>
            <p className="mt-2 text-gray-500 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
