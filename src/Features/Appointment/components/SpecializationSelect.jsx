import React from "react";

const SpecializationSelect = ({ value, onChange, onBlur, error, touched }) => (
  <div className="w-full">
    <label
      htmlFor="specialization"
      className="block text-sm font-bold text-gray-700 mb-2"
    >
      Specialization
    </label>

    <select
      id="specialization"
      name="specialization"
      value={value}
      onChange={onChange} // Formik's handleChange
      onBlur={onBlur}     // Formik's handleBlur
      className={`w-full p-3 border rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 transition
        ${error && touched ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}
      `}
    >
      <option value="">Select Specialization</option>
      <option value="General Medicine">General Medicine</option>
      <option value="Pediatrics">Pediatrics</option>
      <option value="Dermatology">Dermatology</option>
    </select>

    {error && touched && (
      <p className="text-red-500 text-sm mt-2">{error}</p>
    )}
  </div>
);

export default SpecializationSelect;
