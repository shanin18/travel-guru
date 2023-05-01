import React from "react";
import Heading from "../Shared/Heading";
import Slider from "../Shared/Slider";

const Home = () => {
  return (
    <div className="flex gap-12 ml-48">
      <div className="w-4/12">
        <Heading></Heading>
      </div>
      <div className="w-8/12">
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Home;
