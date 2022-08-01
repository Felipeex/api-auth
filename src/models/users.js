import mongoose from "mongoose";

const users = mongoose.model("users", {
  id: Number,
  email: String,
  password: String,
});

export { users };
