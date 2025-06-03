import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-2xl font-bold text-center mt-0">Welcome Back...</h1>
      <span className="text-1xl text-gray-500 font-semibold text-center">
        Please enter your credentials to access your account
      </span>

    </>
  );
};

export default AuthHeader;
