// src/hooks/useHandleSubmit.js
import { supabase } from "../DataBaseClient/SupaBaseClient.jsx"; // Ensure you have the Supabase client
import { useSelector } from "react-redux"; // Import useSelector to access Redux state

export const useHandleSubmit = (name, specialization, date, time) => {
  const user = useSelector((state) => state.auth.user); // Access the logged-in user's data from Redux store

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user.email) {
      alert("User email not found. Please log in.");
      return;
    }

    const { data, error } = await supabase.from("Clinic Appointments").insert([
      {
        PatientName: name,
        DoctorSpec: specialization,
        Date: date,
        email: user.email, // Insert user email into the 'Email' column
      },
    ]);

    if (error) {
      console.error("Error inserting appointment:", error);
      alert("Failed to book appointment");
    } else {
      alert(`Appointment booked with ${specialization} on ${date} at ${time}`);
    }
  };

  return handleSubmit;
};
