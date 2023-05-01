import React from "react";
import About from "../Shared/About";
import Slider from "../Shared/Slider";

const Home = () => {
  return (
    <div className="flex gap-12 ml-48">
      <div className="w-4/12">
        <About></About>
      </div>
      <div className="w-8/12">
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Home;
