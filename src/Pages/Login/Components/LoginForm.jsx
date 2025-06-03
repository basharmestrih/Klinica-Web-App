import React, { useState } from 'react';
import {  useSelector } from 'react-redux';
import useHandleLogin from "../hooks/useHandleLogin.jsx"; // adjust path as needed


const LoginForm = () => {
  const { error, loading } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = useHandleLogin(email, password);

  return (
    <div className="bg-indigo-50 pl-12 pr-12 pb-5 pt-5 rounded-lg shadow-lg w-96 mt-1 transition transform hover:scale-105 hover:shadow-lg ">
      <h1 className="text-[#007bff] text-2xl font-bold text-center mb-6">Sign in by e-mail</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-bold text-gray-700">E-mail</label>
          <input
            type="text"
            id="username"
            name="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-3 w-full h-10 border border-gray-500 rounded-md shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-bold text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 p-3 w-full h-10 border border-gray-500 rounded-md shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full p-3 bg-[#007bff]  text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
        <button
          disabled={loading}
          className="mt-3 w-full p-3 bg-gray-400  text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Enter as guest
        </button>
        <span className="block text-sm text-black font-bold  mt-1 cursor-pointer">Forget Password?</span>
      </form>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default LoginForm;
