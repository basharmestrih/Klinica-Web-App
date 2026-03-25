import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AppointmentHistory from "../Features/Appointment/components/AppointmentsOverview.jsx";
import SectionHeader from "../Features/Appointment/components/SectionHeader.jsx";
import CircleSelector from "../Features/Appointment/components/CircleSelector.jsx";
import AppointmentForm from "../Features/Appointment/components/AppointmentForm.jsx";
import { useFetchAppointments } from "../Features/Appointment/hooks/useFetchAppointments.jsx";

const AppointmentPage = () => {
  const [selectedCircle, setSelectedCircle] = useState("doctor");
  const [appointments, setAppointments] = useState([]);
  const [filter, setFilter] = useState("This Week");
  const [loading, setLoading] = useState(false);

  useFetchAppointments(selectedCircle, filter, setAppointments, setLoading);

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden lg:h-[590px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="relative h-[380px] sm:h-[420px] lg:h-[590px]">
          <img
            src="/assets/rojen.jpg"
            alt="Doctor ready to help with bookings"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-slate-900/10 to-transparent lg:bg-gradient-to-r lg:from-slate-950/75 lg:via-slate-900/25 lg:to-transparent" />

          <div className="absolute inset-0 hidden flex-col justify-start p-6 text-white sm:p-8 lg:flex lg:justify-start lg:p-10">
            <p className="text-4xl font-semibold uppercase tracking-[0.25em] text-blue-100">
              Appointment Care
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-xl">
              Book care in a few simple steps.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-100 sm:text-base">
              Schedule an appointment, review your booking history, and keep your next clinic visit
              organized from one place.
            </p>
          </div>
        </div>

        <div className="flex items- pb-16">
          <div className="w-full bg-white/85 px-4 py-6 shadow-xl backdrop-blur-sm sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            <div className="mx-auto w-full max-w-3xl">
              <SectionHeader selectedCircle={selectedCircle} />
              <CircleSelector
                selectedCircle={selectedCircle}
                setSelectedCircle={setSelectedCircle}
              />

              {selectedCircle === "doctor" ? (
                <AppointmentForm />
              ) : selectedCircle === "nearby" ? (
                <div className="mt-6 rounded-3xl border border-dashed border-blue-200 bg-blue-50 p-8 text-center text-slate-600 shadow-sm">
                  <p className="text-lg font-semibold text-slate-700">Nearby clinics are coming soon.</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    We are preparing a mobile-friendly clinic finder for this section.
                  </p>
                </div>
              ) : (
                <AppointmentHistory
                  appointments={appointments}
                  onFilterChange={setFilter}
                  loading={loading}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentPage;
