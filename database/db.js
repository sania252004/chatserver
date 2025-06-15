// backend/database/db.js
import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected`); 
  } catch (error) {
    console.log("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDb;
