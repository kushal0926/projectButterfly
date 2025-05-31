import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <nav class="flex items-center justify-between py-5 font-medium border-b border-gray-200">
      <img src={assets.logo} class="w-36" alt="store_logo" />
      {/* <h1 className="text-2xl font-">ButterFly.</h1> */}
      <ul class="hidden sm:flex gap-5 text-md text-gray-700 ">
        <NavLink class="flex flex-col items-center gap-1" to="/">
          <li>Home</li>
        </NavLink>
        <NavLink class="flex flex-col items-center gap-1" to="/collection">
          <li>Collection</li>
        </NavLink>
        <NavLink class="flex flex-col items-center gap-1" to="/about">
          <li>About</li>
        </NavLink>
        <NavLink class="flex flex-col items-center gap-1" to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>

      <div className="flex items-center gap-5">
        {/* search-icon */}
        <img
          src={assets.search_icon}
          alt="search_icon"
          className="w-5 cursor-pointer"
        />
        {/* profile-icon */}
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt="profile_icon"
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flexflex-col gap-2 w-36 py-3 px-5 bg-slate-50 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">MyProfile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        {/* cart-icon */}
        <Link to="/cart" className="group relative">
          <img
            src={assets.cart_icon}
            alt="cart_icon"
            className="w-5 cursor-pointer"
          />
        </Link>
        {/* mobile screen dropdown-menu */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu_icon"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* sidebar for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              className="h-5 rotate-180"
              src={assets.dropdown_icon}
              alt="dropdown_icon"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
