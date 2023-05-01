import React, { useContext } from "react";
import logo from "../../assets/images/others/Frame.png";
import logo2 from "../../assets/images/others/logo.png";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "../../components/button";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const location = useLocation();
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast("logout successfully!!"))
      .catch((err) => toast.err(err.message));
  };

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
            location.pathname === "/" || location.pathname === "/booking"
              ? "text-white"
              : ""
          }`}
        >
          <div>
            {location.pathname === "/" || location.pathname === "/booking" ? (
              <div className="relative">
                <input
                  className="border pl-12 pr-2 w-[370px] py-3 rounded-xl outline-none text-white placeholder:text-white"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  type="text"
                  placeholder="Search your Destination..."
                />
                <FaSearch className="absolute top-4 left-4 text-lg text-[#FFFFFF]"></FaSearch>
              </div>
            ) : (
              ""
            )}
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
          {!user && (
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "text-[#F9A51A]" : "")}
            >
              <Button>Login</Button>
            </NavLink>
          )}
          <div>
            {user && (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {user.displayName && (
                    <li>
                      <p className="text-black font-montserrat font-semibold">
                        {user.displayName}
                      </p>
                    </li>
                  )}

                  <li>
                    <p
                      onClick={handleLogOut}
                      className="text-black font-montserrat font-semibold"
                    >
                      Logout
                    </p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
