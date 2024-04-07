import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Doctort = mongoose.model("Doctor", doctorSchema);
