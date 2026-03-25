import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex w-full gap-3">
      <div className="flex w-full items-center gap-3 rounded-[1.6rem] border border-slate-200 bg-slate-50 px-4 py-1 shadow-sm transition focus-within:border-blue-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100">
        <Search size={18} className="shrink-0 text-slate-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-full bg-transparent px-0 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
