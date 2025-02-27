const express = require("express");

const route = express.Router();

const { createUser } = require("../controllers/controllers");

const { Login } = require("../controllers/login");

route.post("/createuser", createUser);

route.post("/login", Login);

module.exports = route;
