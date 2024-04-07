import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      ...username,
    },
    password: {
      type: String,
      required: true,
      min: [8, "Must be greater or equal to 8 characters"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
