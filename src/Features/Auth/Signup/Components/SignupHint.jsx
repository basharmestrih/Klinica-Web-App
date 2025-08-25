import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const SignupHint = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center mt-6 px-4">
      
      {/* Divider with "or" */}
      <div className="flex items-center w-96 mb-4">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="px-3 text-gray-500 text-sm font-medium">or</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Google button */}
      <button
        className="w-96 p-3 bg-gray-300 border border-gray-300 text-gray-700 font-semibold rounded-lg 
                   hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 
                   flex items-center justify-center gap-3 shadow-sm transition-all"
        type="button"
      >
       
        <span>Continue with Google</span>
         <FcGoogle className="text-2xl" />
      </button>

      {/* Signup link */}
      <p className="mt-4 text-sm text-gray-600">
        No account?{' '}
        <span
          className="text-blue-600 font-semibold cursor-pointer hover:underline"
          onClick={() => navigate('/signup')}
        >
          Sign up now
        </span>
      </p>
    </div>
  );
};

export default SignupHint;
