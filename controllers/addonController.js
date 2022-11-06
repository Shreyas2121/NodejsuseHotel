import Addon from "../models/addonMode.js";

export const createAddon = async (req, res) => {
  const { name, price } = req.body;

  const exists = await Addon.findOne({ name });

  if (exists) {
    return res.json({ message: "Addon already exists" });
  }
  let addon;

  try {
    addon = new Addon({
      name,
      price,
    });
  } catch (error) {
    res.send(error);
  }
  const createdAddon = await addon.save();
  res.status(201).json(createdAddon);
};

export const getAddons = async (req, res) => {
  const addons = await Addon.find({});
  res.json(addons);
};
