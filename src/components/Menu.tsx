"use client";
import { menuItems } from "@/utils/menu";
import Link from "next/link";
import { motion } from "framer-motion";

interface MenuProps {
  isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  return (
    <div className="w-full flex flex-col gap-4 mt-4 text-sm h-fit my-auto">
      {menuItems.map(({ title, items }) => (
        <div key={title} className="">
          <p className="hidden group-hover:block text-gray-400 px-2">{title}</p>
          <nav className="flex flex-col gap-2.5 mt-2">
            {items.map(({ Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center justify-center group-hover:justify-start w-full gap-2 px-2 py-1 hover:bg-gray-300 rounded-r-full smooth hover:text-accent"
              >
                <Icon size={20} className="text-accent" />
                {isOpen && (
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "fit-content" }}
                    transition={{ duration: 0.3, ease: "linear" }}
                    className="hidden group-hover:block overflow-hidden"
                  >
                    {label}
                  </motion.span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      ))}
    </div>
  );
};

export default Menu;
