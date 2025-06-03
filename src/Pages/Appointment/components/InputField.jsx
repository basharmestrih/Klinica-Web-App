import React from "react";

const InputField = ({ label, type, id, value, setValue, placeholder }) => (
  <div className="w-full max-w-[400px] mb-4">
    <label htmlFor={id} className="block font-bold text-gray-800 mb-1 text-left">
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className="w-full p-2 border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-blue-500"
    />
  </div>
);

export default InputField;
