import React from "react";
import Searchbar from "./Searchbar";
import { FaRegCommentDots } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <Searchbar />

      <div className="flex items-center gap-6 justify-end w-full">
        {/* message icon */}
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <FaRegCommentDots size={20} />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center rounded-full bg-secondary text-xs">
            1
          </div>
        </div>

        {/* notification */}
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <MdCampaign size={20} />
        </div>

        {/* USER */}
        <div className="flex items-center justify-center gap-1.5">
          <div className="flex flex-col">
            <span className="test-xs leading-3 font-medium">John Doe</span>
            <span className="text-[10px] text-gray-500 text-right">Admin</span>
          </div>
          <Image
            src={"/avatar.png"}
            alt="user profile image"
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
