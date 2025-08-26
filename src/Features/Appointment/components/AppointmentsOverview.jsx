import React, { useState } from "react";

const AppointmentHistory = ({ appointments, onFilterChange, loading }) => {
  const [activeFilter, setActiveFilter] = useState("This Week");
  const filters = ["Today", "This Week"];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="text-gray-700 px-4">
      <p className="text-xl text-start font-bold text-gray-500 mb-4 uppercase tracking-wide">
        Appointment history
      </p>

      <div className="flex justify-between gap-3 mx-20 mb-5">
        {filters.map((label) => (
          <div
            key={label}
            onClick={() => handleFilterClick(label)}
            className={`rounded-2xl shadow-sm px-4 py-2 w-28 text-center text-sm font-medium cursor-pointer transition-all ${
              activeFilter === label
                ? "bg-blue-500 text-white"
                : "bg-indigo-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
            }`}
          >
            {label}
          </div>
        ))}
      </div>

      {loading ? (
          <div className="flex justify-center items-center mt-10">
    <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
  </div>
      ) : appointments.length > 0 ? (
        <div className="overflow-x-auto border rounded-lg shadow-sm max-h-[300px]">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600 uppercase text-xs tracking-wide border-b-2 border-gray-300 sticky top-0 bg-white z-10">
                <th className="px-4 py-3">Patient Name</th>
                <th className="px-4 py-3">Doctor Specialization</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 font-medium text-gray-800">{appointment.PatientName}</td>
                  <td className="px-4 py-4 text-gray-700">{appointment.DoctorSpec}</td>
                  <td className="px-4 py-4 text-gray-700">{appointment.Date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-sm text-gray-400 mt-4">No appointments found.</p>
      )}
    </div>
  );
};

export default AppointmentHistory;
