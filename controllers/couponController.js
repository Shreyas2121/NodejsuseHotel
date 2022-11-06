import couponModel from "../models/couponModel.js";

export const createCoupon = async (req, res) => {
  const { code, discount_percentage } = req.body;

  const couponExists = await couponModel.findOne({ code });

  if (couponExists) {
    res.send("Coupon already exists");
    res.status(400);
  }

  const coupon = await couponModel.create({
    code,
    discount_percentage,
  });

  if (coupon) {
    res.status(201).json({
      code: coupon.code,
      discount_percentage: coupon.discount_percentage,
    });
  } else {
    res.send("Invalid coupon data");
    res.status(400);
  }
};

export const getCoupons = async (req, res) => {
  const coupons = await couponModel.find();
  console.log(coupons);
  res.json(coupons);
};

export const validateCoupon = async (req, res) => {
  const { coupon } = req.body;

  const couponExists = await couponModel.findOne({ code: coupon });

  if (couponExists) {
    res.json(couponExists.discount_percentage);
  } else {
    res.send("Invalid coupon");
  }
};
