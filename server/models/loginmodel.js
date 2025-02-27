const mongoose = require("mongoose");

const loginModel = new mongoose.Schema({
  email: String,
  password: String,
  as: String,
});

module.exports = mongoose.model("loginModel", loginModel);
