import Hall from "../models/hallModel.js";

export const getHalls = async (req, res) => {
  const halls = await Hall.find({});
  res.json(halls);
};
