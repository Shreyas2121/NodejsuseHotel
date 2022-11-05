import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  occupancy: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  images: {
    type: Map,
    of: String,
  },
  total_rooms: {
    type: Number,
    required: true,
  },
  area_sq_ft: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("room", roomSchema);
