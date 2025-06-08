import React from "react";
import { assets } from "../assets/assets";

const CategoryOption = ({
  category,
  subCategory,
  toggleCategory,
  toggleSubCategory,
  showFilter,
  setShowFilter,
}) => {
  return (
    <div className="min-w-60">
      <p
        onClick={() => setShowFilter(!showFilter)}
        className="my-2 text-xl flex items-center cursor-pointer gap-2"
      >
        Filters
        <img
          className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          src={assets.dropdown_icon}
          alt="dropdown icon"
        />
      </p>

      {/* Category Filter */}
      <div
        className={`border border-gray-300 pl-5 py-3 mt-6 ${
          showFilter ? "" : "hidden"
        } sm:block`}
      >
        <p className="mb-3 text-sm font-medium">Categories</p>
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
          {[
            "Bags",
            "Bra",
            "Panties",
            "Nightwear",
            "Pajama Set",
            "Scarf",
            "Socks",
            "Thermal Sets",
            "Others",
          ].map((cat) => (
            <label className="flex gap-2" key={cat}>
              <input
                className="w-3"
                type="checkbox"
                value={cat}
                checked={category.includes(cat)}
                onChange={toggleCategory}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* Subcategory Filter */}
      <div
        className={`border border-gray-300 pl-5 py-3 mt-6 ${
          showFilter ? "" : "hidden"
        } sm:block`}
      >
        <p className="mb-3 text-sm font-medium">Type</p>
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
          {["Topwear", "Bottomwear", "WinterWear"].map((type) => (
            <label className="flex gap-2" key={type}>
              <input
                className="w-3"
                type="checkbox"
                value={type}
                checked={subCategory.includes(type)}
                onChange={toggleSubCategory}
              />
              {type}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryOption;
