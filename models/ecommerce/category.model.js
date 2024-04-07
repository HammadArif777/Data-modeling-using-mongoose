import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    storage: {
      type: String,
      required: true,
      min: [8, "8GB Minimum"],
      max: [32, "32GB Maximum"],
    },
  },
  { timestamps: true }
);

export const Categories = mongoose.model("Categories", categorySchema);
