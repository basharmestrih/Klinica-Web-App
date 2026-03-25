import React from "react";
import { useNavigate } from "react-router-dom";

const stats = [
  { value: "+150", label: "Active Doctors" },
  { value: "+1.5k", label: "Daily Users" },
  { value: "+30", label: "Supported Locations" },
];

const IntroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#007bff] text-white">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col-reverse overflow-hidden md:flex-row">
        <div className="flex flex-1 flex-col justify-center px-5 py-8 sm:px-8 md:px-10 lg:px-14">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
              Your trusted health partner
            </p>
            <h1 className="text-4xl font-bold leading-tight text-indigo-50 sm:text-5xl lg:text-6xl">
              Welcome to Klinica
            </h1>
            <h2 className="mt-3 text-2xl font-bold bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-transparent sm:text-3xl lg:text-4xl">
              Healthy Feels, Happy Vibes!
            </h2>
            <p className="mt-6 max-w-xl text-base font-medium leading-7 text-blue-50 sm:text-lg">
              From trusted treatments to health-boosting products and daily wellness tips, Klinica has
              everything you need to feel your best, every day.
            </p>
          </div>
          <div className="mt-10 flex max-w-3xl flex-wrap gap-x-8 gap-y-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="min-w-[140px] flex-1 border-l-2 border-white/35 pl-4"
              >
                <div className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-100 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-lg font-bold text-indigo-50 sm:text-xl">
            What are you waiting for? Start your journey to better health now!
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="rounded-lg bg-indigo-50 px-6 py-3 text-center font-semibold text-blue-500 shadow transition hover:bg-gray-100"
            >
              Get Started
            </button>
            <button
              type="button"
              onClick={() => navigate("/store")}
              className="rounded-lg bg-red-500 px-6 py-3 text-center font-semibold text-white shadow transition hover:bg-blue-800"
            >
              Buy Healthy Products
            </button>
          </div>
        </div>

        <div className="h-[350px] w-full md:h-auto md:w-[44%] lg:w-[48%]">
          <img
            src="/assets/nurse2.jpg"
            alt="Clinic staff member ready to help patients"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
