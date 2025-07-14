import { AiFillHome } from "react-icons/ai";
import {
  FaUserGraduate,
  FaUserFriends,
  FaClipboardCheck,
  FaRegCalendarAlt,
  FaRegCommentDots,
} from "react-icons/fa";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { MdEditNote, MdAssignment, MdCampaign } from "react-icons/md";
import { PiChalkboardTeacher, PiChalkboard, PiExam } from "react-icons/pi";

export const menuItems = [
  {
    title: "MENU",
    items: [
      {
        Icon: AiFillHome,
        label: "Home",
        href: "/",
      },
      {
        Icon: PiChalkboardTeacher,
        label: "Teachers",
        href: "/teachers",
      },
      {
        Icon: FaUserGraduate,
        label: "Students",
        href: "/students",
      },
      {
        Icon: FaUserFriends,
        label: "Parents",
        href: "/parents",
      },
      {
        Icon: PiChalkboard,
        label: "Classes",
        href: "/classes",
      },
      {
        Icon: MdEditNote,
        label: "Lessons",
        href: "/lessons",
      },
      {
        Icon: PiExam,
        label: "Exams",
        href: "/exams",
      },
      {
        Icon: MdAssignment,
        label: "Assignment",
        href: "/assignment",
      },
      {
        Icon: FaClipboardCheck,
        label: "Attendance",
        href: "/attendance",
      },
      {
        Icon: FaRegCalendarAlt,
        label: "Events",
        href: "/events",
      },
      {
        Icon: FaRegCommentDots,
        label: "Messages",
        href: "/messages",
      },
      {
        Icon: MdCampaign,
        label: "Announcement",
        href: "/announcement",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        Icon: LuUser,
        label: "Profile",
        href: "/profile",
      },
      {
        Icon: FiSettings,
        label: "Settings",
        href: "/settings",
      },
      {
        Icon: FiLogOut,
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];
