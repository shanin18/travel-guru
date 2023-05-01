import React, { useContext } from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/images/icons/fb.png"
import google from "../../assets/images/icons/google.png"
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const {signUpWithGoogle, signUpWithFacebook} = useContext(AuthContext)

    const handleSignInWithFacebook = () =>{
        signUpWithFacebook()
        .then(()=>{
            toast.success("SignIn successfully!!")
        })
        .catch(err => toast.error(err.message))
    }

    const handleSignInWithGoogle = () =>{
        signUpWithGoogle()
        .then(()=>{
            toast.success("SignIn successfully!!")
        })
        .catch(err => toast.error(err.message))
    }

  return (
    <div className="w-[570px] px-14 py-9 border border-gray-300 rounded-lg shadow-xl">
      <h1 className="font-bold font-montserrat text-2xl mb-14 text-[#000000]">
        Login
      </h1>
      <form>
        <input
          className="w-full font-semibold text-[#000000] placeholder:text-[#000000] font-montserrat border-0 border-b-[1px] px-0 border-[#C5C5C5] focus:ring-0 focus:border-[#C5C5C5] mb-10"
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="w-full font-semibold text-[#000000] placeholder:text-[#000000] font-montserrat border-0 border-b-[1px] px-0 border-[#C5C5C5] focus:ring-0 focus:border-[#C5C5C5] mb-6"
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 rounded-[3px] border-[2px] border-black cursor-pointer focus:ring-0 focus:ring-offset-0  "
              />
            </div>
            <label
              htmlFor="remember"
              className="pl-2 text-sm font-semibold text-gray-900 font-montserrat cursor-pointer"
            >
              Remember me
            </label>
          </div>
          <div>
            <Link className="text-[#F9A51A] text-sm font-semibold font-montserrat underline">
              Forgot Password
            </Link>
          </div>
        </div>
        <div>
          <button className="btn w-full font-montserrat bg-[#F9A51A] hover:bg-[#F9A51A] text-black border-none capitalize">
            Login
          </button>
        </div>
      </form>

      <div className="flex justify-center">
        <Link to="/register" className="font-montserrat font-semibold text-sm my-4">Don't have an account? <span className="text-[#F9A51A] underline ml-2">Create an account</span></Link>
      </div>

      <div className="divider">OR</div>

      <div className="mt-5">
        <div onClick={handleSignInWithFacebook} className="border rounded-full flex items-center p-2 mb-2 cursor-pointer">
            <img className="w-[37px]" src={facebook} alt="facebook image" />
            <p className="font-montserrat font-semibold w-full text-center">Continue With Facebook</p>
        </div>
        <div onClick={handleSignInWithGoogle} className="border rounded-full flex items-center p-2 cursor-pointer">
            <img className="w-[37px]" src={google} alt="facebook image" />
            <p className="font-montserrat font-semibold w-full text-center">Continue With Google</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
