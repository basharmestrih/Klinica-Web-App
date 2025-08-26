import { useState } from "react";
import { supabase } from "../../../api/DataBaseClient/SupaBaseClient.jsx";
import { useSelector } from "react-redux";
import { AppointmentModel } from "../../../Models/AppointmentModel.jsx";

export const useHandleSubmit = () => {
  const user = useSelector((state) => state.auth.user);
  const [status, setStatus] = useState("idle"); 

  const handleSubmit = async (values, formikHelpers = {}) => {
    const { resetForm } = formikHelpers;
    setStatus("loading");

   

    const appointment = new AppointmentModel({
      PatientName: values.name,
      DoctorSpec: values.specialization,
      Date: values.date,
      Time: values.time,
      Phone: values.phone,
      email: 'mestbashar@gmail.com',
    });

    const { error } = await supabase.from("Clinic Appointments").insert([appointment]);

    if (error) {
      console.error("Error inserting appointment:", error);
      setStatus("error");
    } else {
      setStatus("success");
      
    }
  };

  return { handleSubmit, status };
};
