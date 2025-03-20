const express = require("express");

const route = express.Router();

const {
  createUser,
  GetData,
  DeleteData,
  Data,
  Update,
} = require("../controllers/controllers");

const { Auth, isAdmin } = require("../middleware/auth");

const { Login } = require("../controllers/login");

const {multer}=require("../middleware/multer")

const {DataHandler}= require("../controllers/datahandler")
route.post("/createuser", createUser);

route.post("/login", Login);
route.post("/update", Update);
route.post("/auth", Auth, isAdmin);

route.post("/insertimg",multer,DataHandler );

route.get("/getdata", GetData);

route.get("/delete", DeleteData);
route.get("/data", Data);

module.exports = route;
