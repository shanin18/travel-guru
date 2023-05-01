import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/images/icons/fb.png"
import google from "../../assets/images/icons/google.png"
const Register = () => {
  return (
    <div className="w-[570px] px-14 py-9 border border-gray-300 rounded-lg shadow-xl">
      <h1 className="font-bold font-montserrat text-2xl mb-14 text-[#000000]">
      Create an account
      </h1>
      <form>
      <input
          className="w-full font-semibold text-[#000000] placeholder:text-[#000000] font-montserrat border-0 border-b-[1px] px-0 border-[#C5C5C5] focus:ring-0 focus:border-[#C5C5C5] mb-8"
          name="first_name"
          type="text"
          placeholder="First Name"
          required
        />
        <input
          className="w-full font-semibold text-[#000000] placeholder:text-[#000000] font-montserrat border-0 border-b-[1px] px-0 border-[#C5C5C5] focus:ring-0 focus:border-[#C5C5C5] mb-8"
          name="last_name"
          type="text"
          placeholder="Last Name"
          required
        />
        <input
          className="w-full font-semibold text-[#000000] placeholder:text-[#000000] font-montserrat border-0 border-b-[1px] px-0 border-[#C5C5C5] focus:ring-0 focus:border-[#C5C5C5] mb-8"
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="w-full font-semibold text-[#000000] placeholder:text-[#000000] font-montserrat border-0 border-b-[1px] px-0 border-[#C5C5C5] focus:ring-0 focus:border-[#C5C5C5] mb-8"
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <input
          className="w-full font-semibold text-[#000000] placeholder:text-[#000000] font-montserrat border-0 border-b-[1px] px-0 border-[#C5C5C5] focus:ring-0 focus:border-[#C5C5C5] mb-12"
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          required
        />
        <div>
          <button className="btn w-full font-montserrat bg-[#F9A51A] hover:bg-[#F9A51A] text-black border-none capitalize">
            Create an account
          </button>
        </div>
      </form>

      <div className="flex justify-center">
        <Link to="/login" className="font-montserrat font-semibold text-sm my-4">
          Already have an account? 
          <span className="text-[#F9A51A] underline ml-2">Login</span>
        </Link>
      </div>

      <div className="divider">OR</div>

      <div className="mt-5">
        <div className="border rounded-full flex items-center p-2 mb-2">
          <img className="w-[37px]" src={facebook} alt="facebook image" />
          <p className="font-montserrat font-semibold w-full text-center">
            Continue With Facebook
          </p>
        </div>
        <div className="border rounded-full flex items-center p-2">
          <img className="w-[37px]" src={google} alt="facebook image" />
          <p className="font-montserrat font-semibold w-full text-center">
            Continue With Google
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
