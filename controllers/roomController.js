import Room from "../models/roomModel.js";

export const getRooms = async (req, res) => {
  const rooms = await Room.find({});
  res.json(rooms);
};
