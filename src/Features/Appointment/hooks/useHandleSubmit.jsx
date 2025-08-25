import { useState } from "react";
import { supabase } from "../../../api/DataBaseClient/SupaBaseClient.jsx";
import { useSelector } from "react-redux";
import { AppointmentModel } from "../../../Models/AppointmentModel.jsx";

export const useHandleSubmit = () => {
  const user = useSelector((state) => state.auth.user);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (values, formikHelpers = {}) => {
    const { resetForm } = formikHelpers;
    setStatus("loading");

    if (!user || !user.email) {
      alert("User email not found. Please log in.");
      setStatus("error");
      return;
    }

    const appointment = new AppointmentModel({
      patientName: values.name,
      doctorSpec: values.specialization,
      date: values.date,
      time: values.time,
      phone: values.phone,
      email: user.email,
    });

    const { error } = await supabase.from("Clinic Appointments").insert([appointment]);

    if (error) {
      console.error("Error inserting appointment:", error);
      setStatus("error");
    } else {
      setStatus("success");
      resetForm?.();
    }
  };

  return { handleSubmit, status };
};
