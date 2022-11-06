import express from "express";
import connectDb from "./connectDb.js";
import dotenv from "dotenv";
import cors from "cors";

import userRoute from "./routes/userRoute.js";
import couponRoute from "./routes/couponRoute.js";
import roomRoute from "./routes/roomRoutes.js";
import hallRoute from "./routes/hallRoute.js";
import addonRoute from "./routes/addonRoute.js";
import reviewRoute from "./routes/reviewRoutes.js";
import bookingRoomRoute from "./routes/bookingRoomRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDb();

app.use("/api/", userRoute);
app.use("/api/", couponRoute);
app.use("/api/", roomRoute);
app.use("/api/", hallRoute);
app.use("/api/", addonRoute);
app.use("/api/", reviewRoute);
app.use("/api/", bookingRoomRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
