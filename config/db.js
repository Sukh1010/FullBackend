import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();

const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((res) => console.log("Mongodb is connected".yellow.underline));
};

export default connectDb;
