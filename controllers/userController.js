import User from "../models/userModel.js";

export const loginUser = async (req, res) => {
  const { user } = req.body;

  const userExists = await User.findOne({ email: user.email });

  if (userExists && (await userExists.matchPassword(user.password))) {
    res.json({
      message: "Login successful",
      user: userExists,
    });
  } else {
    res.send("Invalid email or password");
    res.status(401);
  }
};

export const registerUser = async (req, res) => {
  const { user } = req.body;

  const userExists = await User.findOne({ email: user.email });

  if (userExists) {
    res.json({ message: "User already exists" });
    res.status(400);
  }

  const createdUser = await User.create(user);

  if (user) {
    res.status(201).json({
      message: "User created successfully",
      user: createdUser,
    });
  } else {
    res.json({ message: "Invalid user data" });
  }
};

export const logoutUser = async (req, res) => {
  res.send("Logout");
};
