import mongoose from "mongoose";

const categoryScheama = mongoose.Schema(
  {
    category_name: {
      type: String,
      text: true,
    },

    deletedAt: Date,
  },
  { timestamps: true }
);

export default mongoose.model("Category", categoryScheama);
