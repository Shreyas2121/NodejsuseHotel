import express from "express";
import {
  createCoupon,
  getCoupons,
  validateCoupon,
} from "../controllers/couponController.js";

const router = express.Router();

router.route("/coupons").post(createCoupon);

router.route("/coupons").get(getCoupons);

router.route("/coupon/validate").post(validateCoupon);

export default router;
