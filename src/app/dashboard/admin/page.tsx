import { Announcement, EventCalendar, UserCard } from "@/components";
import { AttendanceChart, CountChart, FinanceChart } from "@/components/charts";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <section className="flex gap-4 justify-between flex-wrap">
          <UserCard type={"student"} />
          <UserCard type={"teacher"} />
          <UserCard type={"parent"} />
          <UserCard type={"staff"} />
        </section>
        {/* MID-SECT */}
        <section className="flex gap-4 flex-col lg:flex-row">
          <CountChart />
          <AttendanceChart />
        </section>
        {/* BOTTOM SECT */}
        <div className="">
          <FinanceChart />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        {/* EVENTS */}
        <EventCalendar />
        <Announcement />
      </div>

      {/*  */}
    </div>
  );
};

export default AdminPage;
