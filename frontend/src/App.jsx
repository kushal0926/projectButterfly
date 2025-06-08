import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <>
    {/* if not working use this {px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]} */}
      <div className="px-1 sm:px-[1vw] md:px-[1vw] lg:px-[2vw]">
        <Navbar />
        <SearchBar />
        <Outlet /> 
        <Footer/> 
      </div>
    </>
  );
};

export default App;
