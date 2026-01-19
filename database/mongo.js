import mongoose from "mongoose";

export const connectMongo = async (MONGO_URI) => {
  if (!MONGO_URI) {
    console.log("❌ MONGO_URI missing!");
    return;
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.log("❌ MongoDB Error:", err.message);
  }
};
