import express from "express";
import {
  createBooking,
  deleteBooking,
  getBookingByUserId,
  getBookings,
  getRoomAvailability,
} from "../controllers/bookingRoomController.js";

const router = express.Router();

router.route("/book/room").post(createBooking);

router.route("/bookings").get(getBookings);

router.route("/bookings/:id").get(getBookingByUserId);

router.route("/room/availability").post(getRoomAvailability);

router.route("/delete/:id").delete(deleteBooking);

export default router;
