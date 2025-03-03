const express = require("express");

const route = express.Router();

const {
  createUser,
  GetData,
  DeleteData,
  Data,
  Update,
} = require("../controllers/controllers");

const { Login } = require("../controllers/login");

route.post("/createuser", createUser);

route.post("/login", Login);
route.post("/update", Update);

route.get("/getdata",GetData);


route.get("/delete",DeleteData);
route.get("/data",Data);


module.exports = route;
