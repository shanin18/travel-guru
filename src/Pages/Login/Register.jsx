import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LoginWithSocial from "../../components/LoginWithSocial";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const {createUser} = useContext(AuthContext)

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const firstName = form.first_name.value
        const lastName = form.last_name.value
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirm_password.value;

        setErrorPassword("");
        setErrorConfirmPassword("");

        if(!/(?=.*?[A-Z])/.test(password)){
            setErrorPassword("password should be at least one uppercase");
            return;
        }
        else if(!/(?=.*?[0-9])/.test(password)){
            setErrorPassword("password should be at least one digit");
            return;
        }
        else if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
            setErrorPassword("password should be at least one special character");
            return;
        }
        else if(password !== confirmPassword){
            setErrorConfirmPassword("password not matched!");
            return;
        }
        

        createUser(email, password)
        .then(()=>{
            toast.success("account created successfully!!");
            form.reset();
        })
        .catch((err) => toast.error(err.message))

    }


  return (
    <div className="w-[570px] px-14 py-9 border border-gray-300 rounded-lg shadow-xl">
      <h1 className="font-bold font-montserrat text-2xl mb-14 text-[#000000]">
        Create an account
      </h1>
      <form onSubmit={handleFormSubmit}>
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
          autoComplete="username"
          required
        />
        <input
          className="w-full font-semibold text-[#000000] placeholder:text-[#000000] font-montserrat border-0 border-b-[1px] px-0 border-[#C5C5C5] focus:ring-0 focus:border-[#C5C5C5]"
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="new-password"
          required
        />
        <small className="text-red-600">{errorPassword}</small>
        <input
          className="w-full font-semibold text-[#000000] placeholder:text-[#000000] font-montserrat border-0 border-b-[1px] px-0 border-[#C5C5C5] focus:ring-0 focus:border-[#C5C5C5] mt-8"
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          autoComplete="new-password"
          required
        />
        <small className="text-red-600">{errorConfirmPassword}</small>
        <div>
          <button className="btn w-full font-montserrat bg-[#F9A51A] hover:bg-[#F9A51A] text-black border-none capitalize mt-12">
            Create an account
          </button>
        </div>
      </form>

      <div className="flex justify-center">
        <Link
          to="/login"
          className="font-montserrat font-semibold text-sm my-4"
        >
          Already have an account?
          <span className="text-[#F9A51A] underline ml-2">Login</span>
        </Link>
      </div>

      <div className="divider">OR</div>

      <div>
        <LoginWithSocial></LoginWithSocial>
      </div>
    </div>
  );
};

export default Register;
