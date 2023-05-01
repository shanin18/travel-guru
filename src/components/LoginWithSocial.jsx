import React, { useContext } from "react";
import facebook from "../assets/images/icons/fb.png"
import google from "../assets/images/icons/google.png"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Context/AuthProvider";

const LoginWithSocial = () => {
  const { signUpWithGoogle, signUpWithFacebook } = useContext(AuthContext);

  const handleSignInWithFacebook = () => {
    signUpWithFacebook()
      .then(() => {
        toast.success("SignIn successfully!!");
      })
      .catch((err) => toast.error(err.message));
  };

  const handleSignInWithGoogle = () => {
    signUpWithGoogle()
      .then(() => {
        toast.success("SignIn successfully!!");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div>
      <div className="mt-5">
        <div
          onClick={handleSignInWithFacebook}
          className="border rounded-full flex items-center p-2 mb-2 cursor-pointer"
        >
          <img className="w-[37px]" src={facebook} alt="facebook image" />
          <p className="font-montserrat font-semibold w-full text-center">
            Continue With Facebook
          </p>
        </div>
        <div
          onClick={handleSignInWithGoogle}
          className="border rounded-full flex items-center p-2 cursor-pointer"
        >
          <img className="w-[37px]" src={google} alt="facebook image" />
          <p className="font-montserrat font-semibold w-full text-center">
            Continue With Google
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginWithSocial;
