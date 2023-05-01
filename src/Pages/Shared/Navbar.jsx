import React from "react";
import background from "../../assets/images/others/Frame.png";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Button from "../../components/button";

const Navbar = () => {
  return (
    <nav className="py-9">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link to="/">
            <img className="w-32" src={background} alt="website logo" />
          </Link>
        </div>

        <div className="flex items-center gap-12 font-montserrat text-white font-medium">
          <div className="relative">
            <input
              className="border pl-12 pr-2 w-[370px] py-3 rounded-xl outline-none text-white placeholder:text-white"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              type="text"
              placeholder="Search your Destination..."
            />
            <FaSearch className="absolute top-4 left-4 text-lg text-[#FFFFFF]"></FaSearch>
          </div>
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#F9A51A]" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#F9A51A]" : "")}
            to="/destination"
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
          <NavLink to="/login"
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
