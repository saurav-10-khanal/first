import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["patient", "doctor", "admin"], default: "patient" },
    phone: { type: String },
    gender: { type: String, enum: ["male", "female", "other"] },
    dateOfBirth: { type: Date },
    profileImage: { type: String, default: "/default-profile.png" },
    appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Appointment" }],
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
