import { AiFillHome } from "react-icons/ai";
import {
  FaUserGraduate,
  FaUserFriends,
  FaClipboardCheck,
  FaRegCalendarAlt,
  FaRegCommentDots,
} from "react-icons/fa";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { GiBookshelf } from "react-icons/gi";
import { MdEditNote, MdAssignment, MdCampaign, MdOutlineAssessment } from "react-icons/md";
import { PiChalkboardTeacher, PiChalkboard, PiExam } from "react-icons/pi";

export const menuItems = [
  {
    title: "MENU",
    items: [
      {
        Icon: AiFillHome,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        Icon: PiChalkboardTeacher,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        Icon: FaUserGraduate,
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        Icon: FaUserFriends,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        Icon: GiBookshelf,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        Icon: PiChalkboard,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        Icon: MdEditNote,
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],

      },
      {
        Icon: PiExam,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        Icon: MdAssignment,
        label: "Assignment",
        href: "/list/assignment",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        Icon: MdOutlineAssessment,
        label: "Result",
        href: "/list/result",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        Icon: FaClipboardCheck,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        Icon: FaRegCalendarAlt,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        Icon: FaRegCommentDots,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        Icon: MdCampaign,
        label: "Announcement",
        href: "/announcement",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        Icon: FiSettings,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        Icon: FiLogOut,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];
