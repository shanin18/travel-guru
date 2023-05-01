import React from "react";
import Header from "../Pages/Shared/Header";
import bg from "../assets/images/others/background.png";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div
      className="relative w-full h-screen bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute top-0 inset-0 bg-[#0000007e]">
        <Header></Header>
        <div className="h-[calc(100vh-132px)] flex items-center">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
