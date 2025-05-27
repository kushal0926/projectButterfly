import React from 'react'
import { NavLink } from 'react-router-dom'
// import { assets } from '../assets/assets'


const Navbar = () => {
  return (
    <nav class="flex items-center justify-between py-5 font-medium bg-white shadow-md ">
    {/* < img src={assets.logo} class="w-36" alt="store_logo" /> */}
    <h1>heroKoStore</h1>
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
      <li>Contact</li>      </NavLink>
    </ul>
    </nav>
    
  )
}

export default Navbar