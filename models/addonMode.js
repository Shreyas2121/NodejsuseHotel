import mongoose from "mongoose";

const addonModeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Addon = mongoose.model("addon", addonModeSchema);

export default Addon;
