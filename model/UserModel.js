import mongoose from "mongoose";

const userLoginData = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  user_email: {
    type: String,
    required: true,
    unique: true,
  },
  user_password: {
    type: String,
    required: true,
  },
});

const AppUsers = mongoose.model("userLoginData", userLoginData);
export default AppUsers;
