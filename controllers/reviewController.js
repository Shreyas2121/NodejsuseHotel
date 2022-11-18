import Review from "../models/reviewModel.js";
// import User from "../models/userModel.js";p
import BookingRoom from "../models/bookingRoomModel.js";

export const createReview = async (req, res) => {
  const { bookingId } = req.body;

  const booking = await BookingRoom.findById(bookingId);

  if (booking.reviewGiven) {
    return res.send("You have already given a review");
  }

  const review = new Review(req.body);
  try {
    booking.reviewGiven = true;
    await booking.save();
    const newReview = await review.save();
    res.json({
      message: "Review created",
      newReview,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    console.log(reviews);
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTopReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      rating: { $gte: 5 },
    });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
