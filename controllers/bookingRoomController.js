import BookingRoom from "../models/bookingRoomModel.js";
import Room from "../models/roomModel.js";
import User from "../models/userModel.js";

export const createBooking = async (req, res) => {
  const { user } = req.body;

  if (!user) {
    return res.send("Room or user not found");
  }

  const userExists = await User.findById(user);

  if (!userExists) {
    return res.send("User not found");
  }

  const booking = await new BookingRoom(req.body).populate("user");

  try {
    const createdBooking = await booking.save();
    res.status(201).json({
      message: "Booking created",
      booking,
    });
  } catch (err) {
    res.send(err.message);
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await BookingRoom.find({}).populate("user");
    res.json(bookings);
  } catch (err) {
    res.send(err.message);
  }
};

export const getBookingByUserId = async (req, res) => {
  const { id } = req.params;

  try {
    const bookings = await BookingRoom.find({ user: id }).populate("user");
    res.json(bookings);
  } catch (err) {
    res.send(err.message);
  }
};

export const getRoomAvailability = async (req, res) => {
  const { checkIn, checkOut } = req.body;

  const parsedCheckIn = new Date(checkIn);
  const parsedCheckOut = new Date(checkOut);

  if (!checkIn || !checkOut) {
    return res.send("Check in or check out date not found");
  }

  if (parsedCheckIn > parsedCheckOut) {
    return res.send("Check in date cannot be greater than check out date");
  }

  try {
    const bookingRoomCheckin = await BookingRoom.find({
      checkIn: { $lte: parsedCheckIn },
      checkOut: { $gt: parsedCheckIn },
    });

    const bookingRoomCheckout = await BookingRoom.find({
      checkIn: { $lt: parsedCheckOut },
      checkOut: { $gte: parsedCheckOut },
    });

    const bookingRoomBetween = await BookingRoom.find({
      checkIn: { $gte: parsedCheckIn },
      checkOut: { $lte: parsedCheckOut },
    });

    const bookingRoom = bookingRoomCheckin.concat(
      bookingRoomCheckout,
      bookingRoomBetween
    );

    const rooms = await Room.find({});

    let availableRooms = {};

    rooms.forEach((room) => {
      availableRooms[room["category"]] = room["total_rooms"];
    });

    console.log(availableRooms);

    let bookedRoomType = {};

    bookingRoom.forEach((booking) => {
      if (bookedRoomType[booking["category"]]) {
        bookedRoomType[booking["category"]] += booking["numOfRooms"];
      } else {
        bookedRoomType[booking["category"]] = booking["numOfRooms"];
      }
    });

    for (const [key, value] of Object.entries(bookedRoomType)) {
      availableRooms[key] -= value;
    }

    res.send(availableRooms);
  } catch (err) {
    res.send(err.message);
  }
};

export const deleteBooking = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const deletedBooking = await BookingRoom.findById(id);
    console.log(deletedBooking);

    if (deletedBooking) {
      await deletedBooking.deleteOne();
      res.json({ message: "Booking deleted" });
    } else {
      res.send("Booking not found");
    }
  } catch (err) {
    res.send(err.message);
  }
};
