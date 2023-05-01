import React from "react";
import logo from "../../assets/images/others/Frame.png";
import logo2 from "../../assets/images/others/logo.png";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "../../components/button";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="py-9">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link to="/">
            <img
              className="w-32"
              src={
                location.pathname === "/" || location.pathname === "/booking"
                  ? logo
                  : logo2
              }
              alt="website logo"
            />
          </Link>
        </div>

        <div
          className={`flex items-center gap-12 font-montserrat font-medium ${
            location.pathname === "/" ? "text-white" : ""
          }`}
        >
          <div>
            {location.pathname === "/" ||
              (location.pathname === "/booking" && (
                <div className="relative">
                  <input
                    className="border pl-12 pr-2 w-[370px] py-3 rounded-xl outline-none text-white placeholder:text-white"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                    type="text"
                    placeholder="Search your Destination..."
                  />
                  <FaSearch className="absolute top-4 left-4 text-lg text-[#FFFFFF]"></FaSearch>
                </div>
              ))}
          </div>

          <NavLink
            className={({ isActive }) => (isActive ? "text-[#F9A51A]" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#F9A51A]" : "")}
            to="/hotels"
          >
            Destination
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#F9A51A]" : "")}
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#F9A51A]" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "text-[#F9A51A]" : "")}
          >
            <Button>Login</Button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
