const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {});
    console.log("Mongo DB Connected");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
