import React from "react";
import SignUpForm from "../Features/Auth/Signup/Components/SignupForm.jsx";

const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row">
        <div className="absolute left-4 top-4 text-3xl font-bold text-[#007bff] sm:left-6 sm:top-6 sm:text-4xl">
          Klinica
        </div>

        <div className="flex w-full items-start justify-center px-4 pb-8 pt-24 sm:px-6 lg:w-1/2 lg:px-10 lg:pt-24">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-1">Be a Klinicer Now</h2>
            <p className="mb-1 text-sm text-gray-500">
              Join us today to book appointments, access health tips, and more!
            </p>
            <SignUpForm />
            <p className="mt-6 text-center text-xs text-gray-400">
              By signing up, you agree to our <a href="/terms" className="underline">Terms</a> and{" "}
              <a href="/privacy" className="underline">Privacy Policy</a>.
            </p>
          </div>
        </div>

        <div className="hidden lg:block lg:w-1/2">
          <img
            src="/assets/create.jpg"
            alt="Health illustration"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
