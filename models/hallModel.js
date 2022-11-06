import mongoose from "mongoose";

const hallSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  max_guests: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  amenities: {
    type: [String],
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  total_halls: {
    type: Number,
    required: true,
  },
});

const Hall = mongoose.model("Hall", hallSchema);

export default Hall;
