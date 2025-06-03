import React from "react";

const AppointmentHistory = ({ appointments }) => {
  return (
    <div className="text-gray-700 px-4">
      {/* Title */}
      <p className="text-xl text-start font-bold text-gray-500 mb-4 uppercase tracking-wide">
        Appointment history
      </p>

      {/* Filters Row */}
      <div className="flex justify-center gap-3 mb-6">
        {["This Week", "This Month", "This Year"].map((label, idx) => (
          <div
            key={idx}
            className="bg-indigo-100 rounded-2xl shadow-sm px-4 py-2 w-28 text-center text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all cursor-pointer"
          >
            {label}
          </div>
        ))}
      </div>

      {/* Appointments Table */}
      {appointments.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600 uppercase text-xs tracking-wide border-b-2 border-gray-300">
                <th className="px-4 py-3">Patient Name</th>
                <th className="px-4 py-3">Doctor Specialization</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-4 font-medium text-gray-800">{appointment.PatientName}</td>
                  <td className="px-4 py-4 text-gray-700">{appointment.DoctorSpec}</td>
                  <td className="px-4 py-4 text-gray-700">{appointment.Date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-sm text-gray-400 mt-4">
          No appointments found.
        </p>
      )}
    </div>
  );
};

export default AppointmentHistory;
