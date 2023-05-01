import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-[calc(100vh-132px)] flex justify-center items-center">
        <Outlet></Outlet>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default LoginLayout;
