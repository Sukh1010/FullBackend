import express from "express";
import colors from "colors";
import userRoute from "./route/userRoute.js";

import productRoute from "./route/productRoute.js";
import categoryRoute from "./route/categoryRoute.js";
import connectDb from "./config/db.js";
import cloudConfig from "./config/cloudConfig.js";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
dotenv.config();

connectDb();
const app = express();
app.use(express.json());

//call cloudinary
cloudConfig();
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/category", categoryRoute);
let Port = process.env.PORT || 8080;
app.listen(
  Port,
  console.log(`server is running on port ${Port}`.blue.underline)
);
