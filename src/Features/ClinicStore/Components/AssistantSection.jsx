import React, { useState } from "react";

const AssistantSection = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("none");

  const categories = [
  { label: "All", value: "all", isRed: true },
  { label: "Pain Relief", value: "pain relief" },
  { label: "Antibiotics", value: "antibiotics" },
  { label: "Allergy", value: "allergy" },
  { label: "Stomach", value: "stomach" },
  { label: "Heart Health", value: "heart health" },
  { label: "Supplements", value: "supplements" },
  { label: "Diabetes", value: "diabetes" },
  { label: "Respiratory", value: "respiratory" },
  { label: "Cold & Flu", value: "cold & flu" },
  ];

  const handleClick = (value) => {
    setSelectedCategory(value);
    onCategoryChange(value); // Notify parent
  };

  return (


      <div className="mt-2 flex flex-wrap justify-start px-5 mb-5 gap-5">
        {categories.map(({ label, value, isRed }) => (
          <button
            key={value}
            onClick={() => handleClick(value)}
            className={`px-3 py-2 text-gray-100 font-bold rounded-lg shadow-md transition flex items-center gap-2 ${
              selectedCategory === value
                ? isRed
                  ? "bg-red-600 text-white"
                  : "bg-blue-600 text-white"
                : isRed
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {label}
            {selectedCategory === value && <span>✔</span>}
          </button>
        ))}
      </div>

     
  );
};

export default AssistantSection;
