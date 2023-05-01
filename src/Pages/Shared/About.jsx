import React from "react";
import Button from "../../components/button";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <h1 className="font-bebas text-8xl text-white">Cox's Bazar</h1>
      <p className="text-white font-montserrat mt-7">
        Cox's Bazar is a city, fishing port, tourism centre and district
        headquarters in southeastern Bangladesh. It is famous mostly for its
        long natural sandy beach, and it ...
      </p>

      <div className="mt-8">
        <Button>
          Booking <FaArrowRight className="inline ml-2"></FaArrowRight>
        </Button>
      </div>
    </div>
  );
};

export default About;
