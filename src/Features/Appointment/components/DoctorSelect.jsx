import React from "react";

const DoctorSelect = ({ specialization, doctor, setDoctor, doctors }) =>
  specialization && (
    <div className="w-full max-w-[400px] mb-4">
      <label htmlFor="doctor" className="block font-bold text-gray-800 mb-1 text-left">
        Select Doctor
      </label>
      <select
        id="doctor"
        value={doctor}
        onChange={(e) => setDoctor(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-blue-500"
      >
        <option value="">Select Doctor</option>
        {doctors[specialization].map((doc, index) => (
          <option key={index} value={doc}>
            {doc}
          </option>
        ))}
      </select>
    </div>
  );

export default DoctorSelect;
