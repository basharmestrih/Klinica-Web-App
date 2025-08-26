import React from 'react';
import LoginForm from '../Features/Auth/Login/Components/LoginForm.jsx';
import AuthHeader from '../Features/Auth/Login/Components/AuthHeader.jsx';
import SignupHint from '../Features/Auth/Signup/Components/SignupHint.jsx';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-row justify-between h-full">
        {/* Left Column */}
        <div className="flex flex-col px-5 py-2 justify-start items-start bg-gray-100 w-1/2">
          <AuthHeader />
          <LoginForm />
          <SignupHint />
        </div>

        {/* Right Column */}
        <div className="flex justify-center w-3/4">
          <img
            src="/assets/254.jpg"
            alt="Half Page Image"
            className="object-cover h-[670px] w-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
