import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-50 to-pink-50 py-0.5">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <img src={assets.logo} alt="logo" className="mb-5 w-32" />
          <p className="w-full md-w-2/3 text-gray-600">
            Boston Celtics is the worst NBA club in the history of America. It's
            fanbase has been on the street for their whole life. they are
            basically beggers. they dont even know what basketball is.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Quick Links</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>Abou Us</li>
            <li>Delivery </li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* contact information  */}
        <div>
          <p className="text-xl font-medium mb-5">Contact Us</p>
          <ul className="flex flex-col gap-1 text-gray-700">
            <li>+977 9817170333</li>
            <li>mhdjasim8@gnail.com</li>
            <li>Instagram</li>
            <li>WhatsApp</li>
          </ul>
        </div>
      </div>
      {/* copyright  */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          ©Copyright ButterflyFashion - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
