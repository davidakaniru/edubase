interface Events {
  id: number;
  title: string;
  time: string;
  description: string;
}

export const adminEvents: Events[] = [
  {
    id: 1,
    title: "Midterm Exam Briefing",
    time: "2025-07-20T09:00:00",
    description:
      "Meeting with academic heads to discuss the upcoming midterm exam schedule and logistics.",
  },
  {
    id: 2,
    title: "PTA Meeting",
    time: "2025-07-22T14:00:00",
    description:
      "Quarterly PTA meeting to discuss school performance, finances, and parent feedback.",
  },
  {
    id: 3,
    title: "Staff Performance Review",
    time: "2025-07-25T10:30:00",
    description:
      "Evaluate and discuss teacher KPIs and classroom engagement reports.",
  },
  {
    id: 4,
    title: "School Inspection Visit",
    time: "2025-07-28T11:00:00",
    description:
      "Ministry of Education team visiting for routine quality inspection.",
  },
  {
    id: 5,
    title: "Term Result Compilation Deadline",
    time: "2025-07-30T17:00:00",
    description:
      "All subject teachers must submit student scores for result processing.",
  },
  {
    id: 6,
    title: "Facility Maintenance Check",
    time: "2025-08-01T08:00:00",
    description:
      "Admin and facilities manager to inspect classrooms and lab equipment.",
  },
  {
    id: 7,
    title: "End of Term Celebration Planning",
    time: "2025-08-03T15:00:00",
    description:
      "Plan student awards, presentations, and entertainment activities.",
  },
];
