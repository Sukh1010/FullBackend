import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    product_name: {
      type: String,
      minLength: 3,
      maxLength: 12,
      required: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
    },
    image: {
      type: String,
    },
    description: { type: String, minLength: 5, maxLength: 60 },
    price: String,
    deletedAt: Date,

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timeStamps: true }
);
export default new mongoose.model("Product", productSchema);
