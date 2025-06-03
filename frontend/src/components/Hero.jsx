import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row border border-gray-400 bg-gradient-to-r from-yellow-50 to-pink-50">
        {/* left-side  */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 font-sans">
          <div className="text-[#1c1c1c]">
            <div className="flex items-center gap-2">
              <span className="w-8 md:w-11 h-[2px] bg-[#414141]"></span>
              <p className="font-medium text-sm mdLtext-base">
                OUR BESTSELLERS
              </p>
            </div>
            <h1 className="text-3xl sm-py-3 lg:text-5xl leading-relaxed font-serif">
              Latest Arrivals
            </h1>
            <div className="flex items-center gap-2">
              <NavLink to="/collection">
                <p className="font-semi-bold text-sm md:text-base">SHOP NOW</p>
              </NavLink>
              <span className="w-8 md:w-11 h-[1px] bg-[#414141]"></span>
            </div>
          </div>
        </div>

        {/* right-side */}
        <img
          className="w-full sm:w-1/2"
          src={assets.hero_img}
          alt="bags"
          style={{ clipPath: "polygon(43% 0, 100% 0, 100% 100%, 42% 100%, 0 50%)" }}
        />
      </div>
    </>
  );
};

export default Hero;
