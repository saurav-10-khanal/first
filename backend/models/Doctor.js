import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    specialty: { type: String, required: true },
    experience: { type: Number, required: true },
    phone: { type: String, required: true },
    gender: { type: String, enum: ["male", "female", "other"] },
    profileImage: { type: String, default: "/default-profile.png" },
    availability: [{ type: String, enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] }],
    rating: { type: Number, default: 0 },
    appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Appointment" }],
  },
  { timestamps: true }
);

export default mongoose.model("Doctor", DoctorSchema);
