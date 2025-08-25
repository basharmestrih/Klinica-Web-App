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
  const [specialization, setSpecialization] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [selectedCircle, setSelectedCircle] = useState("doctor");
  const [appointments, setAppointments] = useState([]); // State to store appointments
  const handleSubmit = useHandleSubmit(name, specialization, date, time);
  useFetchAppointments(selectedCircle, setAppointments);


  return (
    <div className="h-auto flex bg-white">
      {/* LEFT - Image Section */}
      <div className="w-2/3 flex">
        <img
          src="/assets/rojen.jpg"
          alt="Doctor"
          className="object-cover shadow-md"
        />
      </div>

      {/* RIGHT - Content Section */}
      <div className="w-1/2 flex items-start justify-center h-screen">
        <div className="w-full h-full bg-gray-100 pl-8 pr-8 pb-5 pt-2 rounded-lg shadow-md">
          {/* Section Header */}
          <SectionHeader selectedCircle={selectedCircle} />
          {/* Three Circles Icons Row */}

          <CircleSelector
            selectedCircle={selectedCircle}
            setSelectedCircle={setSelectedCircle}
          />


        
          {/* Dynamic Content based on selected circle */}
          {selectedCircle === "doctor" ? (
            <AppointmentForm/>



    ) : selectedCircle === "nearby" ? (
      <div className="text-center text-lg text-gray-500">
        <p>COMING SOON</p>
      </div>
    ) : (
      <AppointmentHistory appointments={appointments} />

   
    )}

            </div>
          </div>
        </div>
      );
    };

    export default AppointmentPage;
