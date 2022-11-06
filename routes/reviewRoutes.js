import express from "express";
import {
  createReview,
  getReviews,
  getTopReviews,
} from "../controllers/reviewController.js";

const router = express.Router();

router.route("/review").post(createReview);

router.route("/review/top").get(getTopReviews);

router.route("/reviews").get(getReviews);

export default router;
