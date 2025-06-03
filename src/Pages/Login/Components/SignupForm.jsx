import React from 'react';
import { useSelector } from 'react-redux';
import useSignupForm from '../hooks/useSignupForm.jsx';

const SignUpForm = () => {
  const { error, loading } = useSelector((state) => state.auth);
  const formik = useSignupForm();

  return (
    <div className="bg-gray-300 shadow-xl pl-12 pr-12 pb-5 pt-5 rounded-lg  w-96 mt-5 transition transform hover:scale-105">
      <h1 className="text-[#007bff] text-2xl font-bold text-center mb-6">Create an account</h1>
      <form onSubmit={formik.handleSubmit}>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Full Name</label>
          <input
            name="fullName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            className="mt-1 p-3 w-full h-10 border border-gray-500 rounded-md"
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.fullName}</div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Phone Number</label>
          <input
            name="phone"
            type="tel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="mt-1 p-3 w-full h-10 border border-gray-500 rounded-md"
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="mt-1 p-3 w-full h-10 border border-gray-500 rounded-md"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Password</label>
          <input
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="mt-1 p-3 w-full h-10 border border-gray-500 rounded-md"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-bold text-gray-700">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            className="mt-1 p-3 w-full h-10 border border-gray-500 rounded-md"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full p-3 bg-[#007bff] text-white font-semibold rounded-md hover:bg-green-600"
        >
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>

      {error && <div className="text-red-500 mt-2 text-center">{error}</div>}
    </div>
  );
};

export default SignUpForm;
