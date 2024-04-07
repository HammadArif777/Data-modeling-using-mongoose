import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, lowercase: true },
    diagnosedWith: {
      type: String,
      required: true,
    },
    address: { type: String, required: true },
    age: { type: Number, required: true },
    bloodGroup: {
      required: true,
      type: String,
    },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "OTHER"],
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);
