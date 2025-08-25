import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import ClinicStore from "./Pages/ClinicStore.jsx";
import AppointmentPage from "./Pages/Appointment.jsx";
import ContactPage from "./Pages/ContactUs.jsx";
import Home from "./Pages/Home.jsx";
import Layout from "./Layout.jsx"; // ✅ Your layout

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>} />
        
          <Route path="/store" element={<ClinicStore />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Routes without Layout (e.g. Login page) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/appointments" element={<AppointmentPage />} />
      </Routes>
    </Router>
  );
}



export default App;
