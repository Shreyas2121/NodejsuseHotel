import mongoose from "mongoose";

const bookingRoomSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  reviewGiven: {
    type: Boolean,
    default: false,
  },
  bookingDate: {
    type: Date,
    required: true,
  },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  numOfRooms: {
    type: Number,
    required: true,
  },
  basePrice: {
    type: Number,
    required: true,
  },
  selectedAddons: {
    type: {},
  },
  total: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  coupon: {
    type: {},
  },
  specialRequest: {
    type: String,
    default: "",
  },
});

const BookingRoom = mongoose.model("BookingRoom", bookingRoomSchema);

export default BookingRoom;
