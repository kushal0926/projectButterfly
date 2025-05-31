import React from "react";
import Hero from "../components/Hero";
// import Slider from "../components/Slider"; not finalized
import LatestCollection from "../components/LatestCollection";

const home = () => {
  return (
    <>
      <Hero />
      <LatestCollection />
      {/* <Slider />  still woriking not finalized*/}
    </>
  );
};

export default home;
