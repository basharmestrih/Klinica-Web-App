// store/models/AppointmentModel.js
export class AppointmentModel {
  constructor({ id, PatientName, DoctorSpec, Date, Time, Phone, email }) {
    if (id) this.id = id;
    this.PatientName = PatientName || "";
    this.DoctorSpec = DoctorSpec || "";
    this.Date = Date || "";
    this.Time = Time || "";
    this.Phone = Phone || "";
    this.email = email || "";
  }

  static fromSupabase(row) {
    return new AppointmentModel({
      id: row.id,
      PatientName: row.PatientName,
      DoctorSpec: row.DoctorSpec,
      Date: row.Date,
      Time: row.Time,
      Phone: row.Phone,
      email: row.email,
    });
  }
}
