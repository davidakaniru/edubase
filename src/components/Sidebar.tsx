"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Menu from "./Menu";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="h-screen w-16 hover:w-40 flex flex-col items-center hover:items-start hover:pr-2 bg-white shadow-sm smooth group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={""}
        className="flex items-center justify-center group-hover:justify-start gap-1.5 p-2"
      >
        <Image
          src={"/brand/edubase.png"}
          alt="EduBase Logo"
          width={30}
          height={30}
        />
        {isOpen && (
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "fit-content" }}
            transition={{ duration: 0.2, ease: "linear" }}
            className="hidden group-hover:block overflow-hidden"
          >
            EduBase
          </motion.span>
        )}
      </Link>
      <Menu isOpen={isOpen} />
    </div>
  );
};

export default Sidebar;
