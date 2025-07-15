import { IoIosMore } from "react-icons/io";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-accent even:bg-secondary p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-xxs bg-white px-2 py-1 rounded-full text-green-600">
          2025/26
        </span>
        <IoIosMore size={20} />
      </div>
      <h3 className="text-2xl font-semibold my-4">1,234</h3>
      <h3 className="capitalize text-sm font-medium text-gray-500">{type}</h3>
    </div>
  );
};

export default UserCard;
