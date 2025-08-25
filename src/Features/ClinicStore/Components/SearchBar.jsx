// Components/SearchBar.jsx
import { FunnelIcon } from "@heroicons/react/24/outline";
import CartPopup from "./CartPopup.jsx";

import React, { useEffect, useState } from "react";


const SearchBar = ({ searchTerm, setSearchTerm }) => {



  
  return (
    <div className="mb-5 w-2/4 flex items-center gap-3">
      {/* Search Bar */}
      <div className="flex items-center flex-grow bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="bg-gray-200 w-full px-4 py-2 focus:outline-none rounded-lg"
        />
      </div>

      
    </div>
  );
};


export default SearchBar;
