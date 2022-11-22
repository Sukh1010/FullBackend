import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "Please enter you user name"],
  },
  email: {
    type: String,
    unique: [true, "already exist"],
    // validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    minLength: 4,
    maxLength: 500,
    required: [true, "Enter your password"],
  },

  // role: { type: String, required: true, enum: ["ADMIN", "CASHIER"] },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default new mongoose.model("User", userSchema);
