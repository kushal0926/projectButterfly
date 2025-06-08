import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        showSearch ? "translate-y-0" : "-translate-y-full"
      } bg-gray-50 border-b shadow-md`}
    >
      <div className="text-center py-4">
        <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-2 mx-3 rounded-full w-3/4 sm:w-1/2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search products"
            className="flex-1 outline-none bg-inherit text-sm"
          />
          <img
            src={assets.search_icon}
            alt="search_icon"
            className="inline w-3 cursor-pointer"
          />
        </div>
        <div className="mt-2">
          <img
            src={assets.cross_icon}
            alt="cross-icon"
            className="inline w-4 cursor-pointer"
            onClick={() => setShowSearch(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
