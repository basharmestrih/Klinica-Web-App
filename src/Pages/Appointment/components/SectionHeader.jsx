import React from "react";

const SectionHeader = ({ selectedCircle }) => {
  return (
    <div className="mb-4">
      <h1 className="text-3xl font-bold text-black mb-2 text-start">Appointment Booking</h1>
      {selectedCircle === "doctor" && (
        <p className="text-sm font-semibold text-gray-400 text-start">
          Fill your data within minutes and check your e-mail
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
