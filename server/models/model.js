const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  first: String,
  last: String,
  email: String,
  city: String,
  state: String,
  zip: String,
  password: String,
  as:String
});

module.exports = mongoose.model("UserModel", userModel);
