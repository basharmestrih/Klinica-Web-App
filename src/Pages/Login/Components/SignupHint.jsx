import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignupHint = () => {
  const navigate = useNavigate();

  return (
    <div 
    className="w-full flex flex-col justify-center mt-1">
            <div className="flex items-center w-full mt-1">
        <div className="border-t border-black flex-grow mr-3"></div>
        <h3 className="text-sm font-bold text-center">OR</h3>
        <div className="border-t border-black flex-grow ml-3"></div>
      </div>
      
      <button
        className="w-96 p-3 bg-red-500 mt-1 text-black font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="button"
      >
        Sign in with Google
      </button>

      <p className="text-lg text-black font-bold text-center">
        No account?{' '}
        <span
          className="text-[#007bff] cursor-pointer"
          onClick={() => navigate('/signup')}
        >
          Sign up now
        </span>
      </p>
    </div>
  );
};

export default SignupHint;
