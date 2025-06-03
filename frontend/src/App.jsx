import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    {/* if not working use this {px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]} */}
      <div className="px-3">
        <Navbar />
        <Outlet /> 
        <Footer/> 
      </div>
    </>
  );
};

export default App;
