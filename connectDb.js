import mongoose from "mongoose";

const connectDb = () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URL).then((data) => {
      console.log("MongoDB Connected");
    });
  } catch (err) {
    console.log(err);
  }
};

export default connectDb;
