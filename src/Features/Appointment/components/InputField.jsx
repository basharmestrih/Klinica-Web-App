import React from "react";

const InputField = ({ label, type, id, name, value, onChange, onBlur, placeholder, error, touched }) => (
  <div className="w-full">
    <label
      htmlFor={id}
      className="block text-sm font-bold text-gray-700 mb-2"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}   // ✅ important for Formik
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      className={`w-full p-3 border rounded-lg shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition
        ${error && touched ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}
      `}
    />
    {error && touched && (
      <p className="text-red-500 text-sm mt-2">{error}</p>
    )}
  </div>
);

export default InputField;
