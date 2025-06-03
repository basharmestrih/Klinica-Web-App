import React from "react";

const ActionButtons = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return (
      <p className="text-center text-gray-700 mt-4">
        Log in to get access to the booking service.
      </p>
    );
  }

  return (
    <div className="flex gap-4 mt-4">
      <button
        type="submit"
        className="flex-1 bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
      >
        Book Appointment
      </button>
      <button
        type="button"
        className="flex-1 bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition"
      >
        Ask a Doctor Now
      </button>
    </div>
  );
};

export default ActionButtons;
