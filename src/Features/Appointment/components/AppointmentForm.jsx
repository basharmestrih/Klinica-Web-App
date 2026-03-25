import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import SpecializationSelect from "./SpecializationSelect.jsx";
import InputField from "./InputField.jsx";
import { useHandleSubmit } from "../hooks/useHandleSubmit.jsx";

export default function AppointmentForm() {
  const [step, setStep] = useState(1);
  const { handleSubmit, status } = useHandleSubmit();

  const validationSchema = Yup.object({
    specialization: Yup.string().required("Specialization is required"),
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
    name: Yup.string().min(3, "Name too short").required("Patient name is required"),
    phone: Yup.string()
      .matches(/^[0-9]{8,15}$/, "Phone must be 8-15 digits")
      .required("Phone is required"),
  });

  const stepHints = {
    1: "Please select a doctor specialization",
    2: "Choose a date for your appointment",
    3: "Pick a suitable time",
    4: "Enter your full name",
    5: "Provide your phone number",
  };

  const variants = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
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
        setStep(1);
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
        setFieldTouched,
      }) => (
        <Form className="rounded-3xl bg-white p-4 shadow-lg ring-1 ring-slate-100 sm:p-5 lg:p-6">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-xl font-bold text-slate-900 sm:text-xl">Book Your Appointment</span>
              <p className="mt-1 text-sm text-slate-500">
                Step {step} of 5
              </p>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 sm:max-w-[220px]">
              <div
                className="h-full rounded-full bg-blue-600 transition-all duration-300"
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
          </div>

          <div className="rounded-2xl bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-700 sm:text-base">
            {stepHints[step]}
          </div>

          <div className="mt-4 min-h-[140px] sm:min-h-[160px]">
            <AnimatePresence mode="wait">
              {status === "loading" && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[150px] flex-col items-center justify-center space-y-3 text-blue-600"
                >
                  <div className="h-10 w-10 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
                  <p className="text-center text-base font-semibold sm:text-lg">
                    Booking your appointment...
                  </p>
                </motion.div>
              )}

              {status === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[150px] flex-col items-center justify-center space-y-3 text-center text-green-600"
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
                  <p className="text-base font-semibold sm:text-lg">
                    Your appointment got booked successfully!
                  </p>
                </motion.div>
              )}

              {(status === "idle" || status === "error") && (
                <motion.div
                  key={`step-${step}`}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.18 }}
                  className="w-full"
                >
                  {step === 1 && (
                    <SpecializationSelect
                      value={values.specialization}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.specialization}
                      touched={touched.specialization}
                    />
                  )}

                  {step === 2 && (
                    <InputField
                      label="Select Date"
                      type="date"
                      id="date"
                      name="date"
                      value={values.date}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.date}
                      touched={touched.date}
                    />
                  )}

                  {step === 3 && (
                    <InputField
                      label="Select Time"
                      type="time"
                      id="time"
                      name="time"
                      value={values.time}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.time}
                      touched={touched.time}
                    />
                  )}

                  {step === 4 && (
                    <InputField
                      label="Patient Name"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.name}
                      touched={touched.name}
                    />
                  )}

                  {step === 5 && (
                    <InputField
                      label="Patient Phone Number"
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.phone}
                      touched={touched.phone}
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {(status === "idle" || status === "error") && (
            <div className={`sm:mt-0  flex flex-col gap-2.5 sm:flex-row ${step === 1 ? "sm:justify-end" : "sm:justify-between"}`}>
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep((currentStep) => currentStep - 1)}
                  className="w-full rounded-full bg-slate-200 px-5 py-2.5 font-bold text-slate-800 transition hover:bg-slate-300 sm:w-auto sm:min-w-[120px]"
                >
                  Back
                </button>
              )}

              {step < 5 && (
                <button
                  type="button"
                  onClick={async () => {
                    const stepFields = ["specialization", "date", "time", "name"];
                    const currentField = stepFields[step - 1];
                    const formErrors = await validateForm();

                    if (formErrors[currentField]) {
                      setFieldTouched(currentField, true);
                      return;
                    }

                    setStep((currentStep) => currentStep + 1);
                  }}
                  className="w-full rounded-full bg-blue-600 px-5 py-2.5 font-bold text-white transition hover:bg-blue-700 sm:w-auto sm:min-w-[120px]"
                >
                  Next
                </button>
              )}

              {step === 5 && (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700 disabled:opacity-50 sm:w-auto sm:min-w-[160px]"
                >
                  {isSubmitting ? "Booking..." : "Book Appointment"}
                </button>
              )}
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}
