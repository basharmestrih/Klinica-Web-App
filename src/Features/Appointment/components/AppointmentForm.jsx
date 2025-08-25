import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SpecializationSelect from "./SpecializationSelect.jsx";
import InputField from "./InputField.jsx";
import { useHandleSubmit } from "../hooks/useHandleSubmit.jsx";

export default function AppointmentForm() {
  const [step, setStep] = useState(1);

  const { handleSubmit, status } = useHandleSubmit();

  // ✅ Validation schema for all steps
  const validationSchema = Yup.object({
    specialization: Yup.string().required("Specialization is required"),
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
    name: Yup.string().min(3, "Name too short").required("Patient name is required"),
    phone: Yup.string()
      .matches(/^[0-9]{8,15}$/, "Phone must be 8–15 digits")
      .required("Phone is required"),
  });

  // ✅ Step hints
  const stepHints = {
    1: "Please select a doctor specialization",
    2: "Choose a date for your appointment",
    3: "Pick a suitable time",
    4: "Enter your full name",
    5: "Provide your phone number",
  };

  const variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <Formik
      initialValues={{
        specialization: "",
        date: "",
        time: "",
        name: "",
        phone: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        await handleSubmit(values);
        setSubmitting(false);
        resetForm();
      }}
    >
{({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  isSubmitting,
  validateForm,
  setFieldTouched
}) => (        <Form
          className="mt-10 bg-white shadow-lg rounded-2xl p-6 space-y-6 max-w-3xl mx-auto h-[200] flex flex-col justify-between"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Book Your Appointment
          </h2>

          {/* 👇 Step hint */}
          <p className="text-lg md:text-xl font-semibold text-blue-600 text-center mb-4">
            {stepHints[step]}
          </p>

          <div className="flex-1 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {status === "loading" && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center space-y-2 text-blue-600"
                >
                  <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-lg font-semibold">Booking your appointment...</p>
                </motion.div>
              )}

              {status === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center space-y-2 text-green-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-lg font-semibold">
                    Your appointment got booked successfully!
                  </p>
                </motion.div>
              )}

              {status === "idle" || status === "error" ? (
                <>
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      variants={variants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.1 }}
                      className="w-full md:w-3/4"
                    >
<SpecializationSelect
  value={values.specialization}
  onChange={handleChange}
  onBlur={handleBlur}
  error={errors.specialization}
  touched={touched.specialization}
/>


                     
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="step2" {...variants} className="w-full md:w-3/4">
                      <InputField
                        label="Select Date"
                        type="date"
                        id="date"
                        name="date"
                        value={values.date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.date && touched.date && (
                        <p className="text-red-500 text-sm mt-2">{errors.date}</p>
                      )}
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div key="step3" {...variants} className="w-full md:w-3/4">
                      <InputField
                        label="Select Time"
                        type="time"
                        id="time"
                        name="time"
                        value={values.time}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.time && touched.time && (
                        <p className="text-red-500 text-sm mt-2">{errors.time}</p>
                      )}
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div key="step4" {...variants} className="w-full md:w-3/4 space-y-6">
                      <InputField
                        label="Patient Name"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name && (
                        <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                      )}
                    </motion.div>
                  )}

                  {step === 5 && (
                    <motion.div key="step5" {...variants} className="w-full md:w-3/4 space-y-6">
                      <InputField
                        label="Patient Phone Number"
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.phone && touched.phone && (
                        <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
                      )}
                    </motion.div>
                  )}
                </>
              ) : null}
            </AnimatePresence>
          </div>

          {/* Buttons */}
          {status === "idle" || status === "error" ? (
            <div className={`flex ${step === 1 ? "justify-end" : "justify-between"}`}>
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="px-12 py-2 rounded-md bg-gray-300 font-bold text-gray-800 hover:bg-gray-400 transition"
                >
                  Back
                </button>
              )}

              {step < 5 && (
  <button
    type="button"
    onClick={async () => {
      // Map step to field name
      const stepFields = ["specialization", "date", "time", "name"];
      const currentField = stepFields[step - 1];

      // Validate only current field
      const errors = await validateForm(); // validates all fields
      if (errors[currentField]) {
        // mark the field as touched so the error shows
        setFieldTouched(currentField, true);
        return; // stop going to next step
      }

      // move to next step
      setStep((s) => s + 1);
    }}
    className="px-12 py-2 rounded-md bg-blue-600 font-bold text-white hover:bg-blue-700 transition"
  >
    Next
  </button>
)}


              {step === 5 && (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-12 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {isSubmitting ? "Booking..." : "Book Appointment"}
                </button>
              )}
            </div>
          ) : null}
        </Form>
      )}
    </Formik>
  );
}
