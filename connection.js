import mongoose from "mongoose";
import dotenv from "dotenv";

// Dotenv Config
dotenv.config();
const URI = process.env.CONNECTMONGO;

const ConnectDB = () => {
  try {
    const connection = mongoose.connect(URI);
    if (connection) {
      console.log("Connection Successfully");
    }
  } catch (error) {
    console.log("Connection Unsuccessful");
  }
};

export default ConnectDB;
