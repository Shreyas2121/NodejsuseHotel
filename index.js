import express from "express";
import connectDb from "./connectDb.js";
import dotenv from "dotenv";
import cors from "cors";

import userRoute from "./routes/userRoute.js";
import couponRoute from "./routes/couponRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDb();

app.use("/api/", userRoute);
app.use("/api/", couponRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
