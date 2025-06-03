// src/hooks/useFetchAppointments.js
import { useEffect } from "react";
import { supabase } from "../DataBaseClient/SupaBaseClient.jsx"; // Ensure you have the Supabase client
import { useSelector } from "react-redux"; // Import useSelector to access Redux state

export const useFetchAppointments = (selectedCircle, setAppointments) => {
  const user = useSelector((state) => state.auth.user); // Access the logged-in user's data from Redux store

  useEffect(() => {
    if (selectedCircle === "appointments" && user?.email) {
      const fetchAppointments = async () => {
        const { data, error } = await supabase
          .from("Clinic Appointments")
          .select("PatientName, DoctorSpec, Date")
          .eq("email", user.email); // Filter appointments by user email

        if (error) {
          console.error("Error fetching appointments:", error);
        } else {
          setAppointments(data);
        }
      };

      fetchAppointments();
    }
  }, [selectedCircle, user?.email]); // Add user.email as a dependency
};
