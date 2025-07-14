import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
  return (
    <div className="hidden md:flex items-center justify-center gap-2 text-xs rounded-full ring-1 ring-gray-300 px-2">
      <label htmlFor="search">
        <CiSearch size={18} className="cursor-pointer" />
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search..."
        className="outline-none w-50 p-2 bg-transparent"
      />
    </div>
  );
};

export default Searchbar;
