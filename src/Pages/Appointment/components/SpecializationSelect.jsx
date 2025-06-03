import React from "react";

const SpecializationSelect = ({ specialization, setSpecialization }) => (
  <div className="w-full max-w-[400px] mb-4">
    <label htmlFor="specialization" className="block font-bold text-gray-800 mb-1 text-left">
      Specialization
    </label>
    <select
      id="specialization"
      value={specialization}
      onChange={(e) => setSpecialization(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-blue-500"
    >
      <option value="">Select Specialization</option>
      <option value="General Medicine">General Medicine</option>
      <option value="Pediatrics">Pediatrics</option>
      <option value="Dermatology">Dermatology</option>
    </select>
  </div>
);

export default SpecializationSelect;
