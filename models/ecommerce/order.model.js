import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number },
});

const orderSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    orderItem: {
      type: [orderItemSchema],
      address: { type: String, required: true },
      status: {
        default: "PENDING",
        enum: ["PENDING", "CANCELED", "DELIVERED"],
        required: true,
      },
    },
  },
  { timestamps: true }
);
