import React from "react";
import Button from "../../components/button";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Heading = ({ children }) => {
  const location = useLocation();

  return (
    <div>
      <h1 className="font-bebas text-8xl text-white">Cox's Bazar</h1>
      {children}

      <div className="mt-8">
        {location.pathname === "/" && (
          <Link to="/booking">
            <Button>
              Booking <FaArrowRight className="inline ml-2"></FaArrowRight>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Heading;
