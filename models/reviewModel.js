import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  bookingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BookingRoom",
  },
  comment: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const Review = mongoose.model("review", reviewSchema);

export default Review;
