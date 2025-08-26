import React, { useState } from "react";
import SpecializationSelect from "../Features/Appointment/components/SpecializationSelect.jsx";
import InputField from "../Features/Appointment/components/InputField.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
import AppointmentHistory from "../Features/Appointment/components/AppointmentsOverview.jsx"
import { useSelector } from "react-redux";
import SectionHeader from "../Features/Appointment/components/SectionHeader.jsx";
import CircleSelector from "../Features/Appointment/components/CircleSelector.jsx";
import AppointmentForm from "../Features/Appointment/components/AppointmentForm.jsx";
import ActionButtons from "../Features/Appointment/components/ActionButtons.jsx";
import { useHandleSubmit } from "../Features/Appointment/hooks/useHandleSubmit.jsx";
import { useFetchAppointments } from "../Features/Appointment/hooks/useFetchAppointments.jsx";

const AppointmentPage = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [selectedCircle, setSelectedCircle] = useState("doctor");
  const [appointments, setAppointments] = useState([]);
  const [filter, setFilter] = useState("This Week");
  const [loading, setLoading] = useState(false); // 🔹 loading state

  useFetchAppointments(selectedCircle, filter, setAppointments, setLoading);

  return (
    <div className="h-auto flex bg-white">
      {/* LEFT - Image Section */}
      <div className="w-2/3 flex">
        <img src="/assets/rojen.jpg" alt="Doctor" className="object-cover shadow-md" />
      </div>

      {/* RIGHT - Content Section */}
      <div className="w-1/2 flex items-start justify-center h-screen">
        <div className="w-full h-full bg-gray-100 pl-8 pr-8 pb-5 pt-2 rounded-lg shadow-md">
          <SectionHeader selectedCircle={selectedCircle} />
          <CircleSelector
            selectedCircle={selectedCircle}
            setSelectedCircle={setSelectedCircle}
          />

          {selectedCircle === "doctor" ? (
            <AppointmentForm />
          ) : selectedCircle === "nearby" ? (
            <div className="text-center text-lg text-gray-500">
              <p>COMING SOON</p>
            </div>
          ) : (
            <AppointmentHistory
              appointments={appointments}
              onFilterChange={setFilter}
              loading={loading} // 🔹 pass loading state
            />
          )}
        </div>
      </div>
    </div>
  );
};

    export default AppointmentPage;
