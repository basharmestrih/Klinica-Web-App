import React from "react";

const CircleSelector = ({ selectedCircle, setSelectedCircle }) => {
  const options = [
    { key: "doctor", icon: "fas fa-user-md", label: "Book a Doctor" },
    { key: "appointments", icon: "fas fa-calendar-alt", label: "Booked Appointments" },
    { key: "nearby", icon: "fas fa-map-marker-alt", label: "Nearby Clinics" },
  ];

  return (
    <div className="flex justify-center gap-12 mb-8">
      {options.map((opt) => (
        <div
          key={opt.key}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setSelectedCircle(opt.key)}
        >
          <div className={`w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center 
            ${selectedCircle === opt.key ? "ring-4 ring-blue-400" : ""}`}>
            <i className={`${opt.icon} text-blue-600 text-2xl`} />
          </div>
          <span className="mt-2 text-sm text-gray-500 font-bold">{opt.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CircleSelector;
