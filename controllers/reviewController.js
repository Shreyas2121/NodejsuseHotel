import Review from "../models/reviewModel.js";
import User from "../models/userModel.js";

export const createReview = async (req, res) => {
  const userId = req.user._id;

  const user = await User.findById(userId);

  if (user.reviewGiven) {
    return res.send("You have already given a review");
  }

  const review = new Review(req.body);
  try {
    user.reviewGiven = true;
    const newReview = await review.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTopReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ rating: 5 })
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
