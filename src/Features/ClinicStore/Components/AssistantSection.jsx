import React, { useState } from "react";

const AssistantSection = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

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
    onCategoryChange(value);
  };

  return (
    <div>
      <div className="mb-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Browse categories
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Pick a quick filter to narrow the product list.
        </p>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {categories.map(({ label, value, isRed }) => (
          <button
            key={value}
            onClick={() => handleClick(value)}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold shadow-sm transition sm:text-sm ${
              selectedCategory === value
                ? isRed
                  ? "border-red-600 bg-red-600 text-white"
                  : "border-[#0A3966] bg-[#0A3966] text-white"
                : isRed
                  ? "border-red-200 bg-red-50 text-red-700 hover:bg-red-100"
                  : "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100"
            }`}
            type="button"
          >
            <span>{label}</span>
            {selectedCategory === value && <span>Selected</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AssistantSection;
