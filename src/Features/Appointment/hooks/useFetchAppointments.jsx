// src/hooks/useFetchAppointments.js
import { useEffect } from "react";
import { supabase } from "../../../api/DataBaseClient/SupaBaseClient.jsx";
import { useSelector } from "react-redux";
import { AppointmentModel } from "../../../Models/AppointmentModel.jsx";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const useFetchAppointments = (selectedCircle, filter, setAppointments, setLoading) => {
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (selectedCircle !== "appointments") {
      return;
    }

    const fetchAppointments = async () => {
      setLoading(true);
      let query = supabase.from("appointments").select("*");

      const today = new Date();

      if (filter === "Today") {
        query = query.eq("Date", formatDate(today));
      } else if (filter === "This Week") {
        const startOfWeek = new Date(today);
        const dayOfWeek = startOfWeek.getDay();
        const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

        startOfWeek.setDate(startOfWeek.getDate() + diffToMonday);

        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);

        query = query
          .gte("Date", formatDate(startOfWeek))
          .lte("Date", formatDate(endOfWeek));
      }

      const { data, error } = await query;

      if (error) {
        console.error("Error fetching appointments:", error);
      } else {
        const mapped = (data ?? [])
          .map((row) => AppointmentModel.fromSupabase(row))
          .sort((a, b) => new Date(a.Date) - new Date(b.Date));

        setAppointments(mapped);
      }

      setLoading(false);
    };

    fetchAppointments();
  }, [selectedCircle, filter, user?.email, setAppointments, setLoading]);
};
