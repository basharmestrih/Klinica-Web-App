import React from "react";

const copyBySection = {
  doctor: {
    title: "Appointment Booking",
    description: "Choose a specialization and complete your booking details step by step.",
  },
  appointments: {
    title: "Booked Appointments",
    description: "Review your latest bookings and filter them by time range.",
  },
  nearby: {
    title: "Nearby Clinics",
    description: "Find the closest clinics when this feature goes live.",
  },
};

const SectionHeader = ({ selectedCircle }) => {
  const activeCopy = copyBySection[selectedCircle] || copyBySection.doctor;

  return (
    <div className="mb-6 sm:mb-4">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">Klinica Care</p>
      <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
        {activeCopy.title}
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
        {activeCopy.description}
      </p>
    </div>
  );
};

export default SectionHeader;
