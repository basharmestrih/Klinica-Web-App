// store/models/AppointmentModel.js

export class AppointmentModel {
  constructor({ id, patientName, doctorSpec, date, time, phone, email }) {
    this.id = id || null; // Supabase row ID
    this.patientName = patientName || "";
    this.doctorSpec = doctorSpec || "";
    this.date = date || "";
    this.time = time || "";
    this.phone = phone || "";
    this.email = email || "";
  }

  static fromSupabase(row) {
    return new AppointmentModel({
      id: row.id,
      patientName: row.PatientName,
      doctorSpec: row.DoctorSpec,
      date: row.Date,
      time: row.Time,
      phone: row.Phone,
      email: row.email,
    });
  }
}
