import React from "react";
import { Link } from "react-router-dom";

const StoreBanner = () => {
  return (
    <section className="px-4 pb-12 pt-2 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] shadow-lg sm:min-h-[380px] lg:min-h-[460px]">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: "url('/assets/store.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/35 to-transparent" />

          <div className="relative z-10 flex min-h-[320px] flex-col justify-end p-6 sm:min-h-[380px] sm:p-8 lg:min-h-[460px] lg:max-w-2xl lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">Clinic Store</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Support your routine with trusted wellness essentials.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-100 sm:text-base">
              Browse supplements, self-care products, and doctor-approved picks designed to help you
              feel stronger every day.
            </p>

            <div className="mt-6">
              <Link
                to="/store"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-slate-100 sm:text-base"
              >
                Check our store
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreBanner;
