import React from "react";

const CircleSelector = ({ selectedCircle, setSelectedCircle }) => {
  const options = [
    { key: "doctor", icon: "fas fa-user-md", label: "Book a Doctor" },
    { key: "appointments", icon: "fas fa-calendar-alt", label: "Appointments" },
    { key: "nearby", icon: "fas fa-map-marker-alt", label: "Clinics" },
  ];

  return (
    <div className="mb-5 flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:mb-6 sm:justify-start">
      {options.map((opt) => (
        <button
          key={opt.key}
          type="button"
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-1.5 text-xs font-semibold shadow-sm transition sm:px-3.5 sm:py-2 sm:text-sm ${
            selectedCircle === opt.key
              ? "border-blue-500 bg-blue-50 text-blue-700 shadow-blue-100"
              : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50/60"
          }`}
          onClick={() => setSelectedCircle(opt.key)}
        >
          <div
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] sm:h-7 sm:w-7 sm:text-[11px] ${
              selectedCircle === opt.key ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
            }`}
          >
            <i className={opt.icon} />
          </div>
          <span>{opt.label}</span>
        </button>
      ))}
    </div>
  );
};

export default CircleSelector;
