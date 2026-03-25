import React, { useState } from "react";

const AppointmentHistory = ({ appointments, onFilterChange, loading }) => {
  const [activeFilter, setActiveFilter] = useState("This Week");
  const filters = ["Today", "This Week"];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="rounded-3xl bg-white p-4 shadow-lg ring-1 ring-slate-100 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-lg font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-xl">
          Appointment history
        </p>

        <div className="flex gap-3">
          {filters.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => handleFilterClick(label)}
              className={`rounded-lg px-4 text-sm font-bold transition ${
                activeFilter === label
                  ? "bg-blue-500 text-white shadow-md shadow-blue-100"
                  : "bg-indigo-100 text-slate-700 hover:bg-blue-100 hover:text-blue-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex min-h-[220px] items-center justify-center">
          <div className="h-10 w-10 rounded-full border-4 border-blue-500 border-dashed animate-spin" />
        </div>
      ) : appointments.length > 0 ? (
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <table className="min-w-[520px] w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                  <th className="px-4 py-3">Patient Name</th>
                  <th className="px-4 py-3">Doctor Specialization</th>
                  <th className="px-4 py-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr key={index} className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50">
                    <td className="px-4 py-4 font-medium text-slate-900">{appointment.PatientName}</td>
                    <td className="px-4 py-4 text-slate-600">{appointment.DoctorSpec}</td>
                    <td className="px-4 py-4 text-slate-600">{appointment.Date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-10 text-center text-sm text-slate-500">
          No appointments found.
        </div>
      )}
    </div>
  );
};

export default AppointmentHistory;
