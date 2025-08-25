import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Mail, Lock, Loader2, LogIn, User } from "lucide-react"; // icons
import useHandleLogin from "../../hooks/useHandleAuth.jsx";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const { error, loading } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = useHandleLogin(email, password);

  return (
    <div className="ml-10 bg-white/90 backdrop-blur-md px-8 py-6 rounded-2xl shadow-xl w-96 mt-6 transition transform hover:scale-[1.02] hover:shadow-2xl">
      {/* Header */}
      <h1 className="text-gray-400 text-xl font-extrabold text-center mb-6">
        Login to Your Patient Account
      </h1>

      <form onSubmit={handleLogin} className="space-y-5">
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700"
          >
            Email
          </label>
          <div className="relative mt-1">
            <Mail className="absolute left-3 top-3.5 text-gray-400 h-5 w-5" />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-700"
          >
            Password
          </label>
          <div className="relative mt-1">
            <Lock className="absolute left-3 top-3.5 text-gray-400 h-5 w-5" />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              placeholder="Enter your password"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 w-full py-3 bg-[#007bff] text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Logging in...
              </>
            ) : (
              <>
                <LogIn className="h-5 w-5" />
                Login
              </>
            )}
          </button>

          <button
            type="button"
            
            onClick={() => navigate("/")}

            className="flex items-center justify-center gap-2 w-full py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition disabled:opacity-70"
          >
            <User className="h-5 w-5" />
            Enter as Guest
          </button>
        </div>

        {/* Forgot Password */}
        <p className="text-sm text-blue-600 font-medium text-center mt-2 cursor-pointer hover:underline">
          Forgot Password?
        </p>
      </form>

      {/* Error Message */}
      {error && (
        <div className="text-red-500 text-sm font-medium text-center mt-4">
          {error}
        </div>
      )}
    </div>
  );
};

export default LoginForm;
