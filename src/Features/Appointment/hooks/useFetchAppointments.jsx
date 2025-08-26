// src/hooks/useFetchAppointments.js
import { useEffect } from "react";
import { supabase } from "../../../api/DataBaseClient/SupaBaseClient.jsx";
import { useSelector } from "react-redux";
import { AppointmentModel } from "../../../Models/AppointmentModel.jsx";

export const useFetchAppointments = (selectedCircle, filter, setAppointments, setLoading) => {
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (selectedCircle === "appointments") {
      const fetchAppointments = async () => {
        setLoading(true); // 🔹 start loading
        let query = supabase.from("Clinic Appointments").select("*");

        const today = new Date();
        if (filter === "Today") {
          const start = today.toISOString().split("T")[0];
          query = query.eq("Date", start);
        } else if (filter === "This Week") {
          const firstDay = new Date(today.setDate(today.getDate() - today.getDay()));
          const lastDay = new Date(today.setDate(firstDay.getDate() + 6));
          query = query.gte("Date", firstDay.toISOString().split("T")[0])
                       .lte("Date", lastDay.toISOString().split("T")[0]);
        }

        const { data, error } = await query;

        if (error) {
          console.error("Error fetching appointments:", error);
        } else {
          const mapped = data.map((row) => AppointmentModel.fromSupabase(row));
          setAppointments(mapped);
        }

        setLoading(false); // 🔹 finish loading
      };

      fetchAppointments();
    }
  }, [selectedCircle, filter, user?.email, setAppointments, setLoading]);
};
