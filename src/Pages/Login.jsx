import React from "react";
import LoginForm from "../Features/Auth/Login/Components/LoginForm.jsx";
import AuthHeader from "../Features/Auth/Login/Components/AuthHeader.jsx";
import SignupHint from "../Features/Auth/Signup/Components/SignupHint.jsx";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row">
        <div className="flex w-full flex-col justify-center px-4 py-8 sm:px-6 lg:w-1/2 lg:px-10">
          <div className="mx-auto mt-24 lg:mt-0 flex w-full max-w-md flex-col items-center">
            <AuthHeader />
            <LoginForm />
            <SignupHint />
          </div>
        </div>

        <div className="hidden lg:flex lg:w-1/2">
          <img
            src="/assets/254.jpg"
            alt="Healthcare welcome visual"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
