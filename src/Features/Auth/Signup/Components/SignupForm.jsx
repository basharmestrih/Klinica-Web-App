import React, { useState } from "react";
import { useSelector } from "react-redux";
import useSignupForm from "../Hooks/useSignupForm.jsx";
import { User, Phone, Mail, Lock, Loader2 } from "lucide-react";

const SignUpForm = () => {
  const { error, loading } = useSelector((state) => state.auth);
  const formik = useSignupForm();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white/90 backdrop-blur-md px-8 py-6 rounded-2xl shadow-xl w-96 mt-6 transition transform hover:scale-[1.02] hover:shadow-2xl">
      <h1 className="text-[#007bff] text-2xl font-extrabold text-center mb-6">
        Create an Account
      </h1>

      <form onSubmit={formik.handleSubmit} className="space-y-4">

        {/* Full Name */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
          <div className="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            <User className="ml-3 text-gray-400 h-5 w-5" />
            <input
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              placeholder="Enter your full name"
              className="pl-2 py-2 w-full rounded-lg focus:outline-none"
            />
          </div>
          {formik.touched.fullName && formik.errors.fullName && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.fullName}</div>
          )}
        </div>

        {/* Phone */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
          <div className="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            <Phone className="ml-3 text-gray-400 h-5 w-5" />
            <input
              name="phone"
              type="tel"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              placeholder="Enter your phone number"
              className="pl-2 py-2 w-full rounded-lg focus:outline-none"
            />
          </div>
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
          )}
        </div>

        {/* Email */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
          <div className="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            <Mail className="ml-3 text-gray-400 h-5 w-5" />
            <input
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter your email"
              className="pl-2 py-2 w-full rounded-lg focus:outline-none"
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
          )}
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
          <div className="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            <Lock className="ml-3 text-gray-400 h-5 w-5" />
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Enter password"
              className="pl-2 py-2 w-full rounded-lg focus:outline-none"
            />
          </div>
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
          )}
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm Password</label>
          <div className="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            <Lock className="ml-3 text-gray-400 h-5 w-5" />
            <input
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              placeholder="Confirm password"
              className="pl-2 py-2 w-full rounded-lg focus:outline-none"
            />
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>
          )}
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center gap-2 transition disabled:opacity-70"
        >
          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Sign Up"}
        </button>
      </form>

      {/* Error */}
      {error && <div className="text-red-500 mt-2 text-center">{error}</div>}
    </div>
  );
};

export default SignUpForm;
