import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    title: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      unique: true,
      required: true,
    },
    stock: {
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
