import React from "react";
import Heading from "../Shared/Heading";
import Slider from "../Shared/Slider";

const Home = () => {
  return (
    <div className="flex gap-12 ml-48">
      <div className="w-4/12">
        <Heading>
          <p className="text-white font-montserrat mt-7">
            Cox's Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach, and it ...
          </p>
        </Heading>
      </div>
      <div className="w-8/12">
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Home;
