const { Model } = require("mongoose");
const userModel = require("../models/model");

const createUser = async (req, res) => {
  try {
    console.log(req.body);

    let userrsp = await userModel.create(req.body);
    res.status(200).json({ success: true, rsp: userrsp });
  } catch (error) {}
};

const GetData = async (req, res) => {
  try {
    let rsp = await userModel.find();

    res.status(200).send(rsp);
  } catch (error) {}
};

const DeleteData = async (req, res) => {
  try {
    const { id } = req.query;

    let rsp = await userModel.findByIdAndDelete(id);

    res.send(rsp);
  } catch (error) {}
};

const Data = async (req, res) => {
  try {
    let { id } = req.query;

    let mdData = await userModel.findById(id);

    console.log(mdData);

    res.send(mdData);
  } catch (error) {}
};

const Update = async (req, res) => {
  try {
    let { id } = req.query;
    console.log(req.query);
    console.log(req.body);

    let rspdata = await userModel.findByIdAndUpdate(id, req.body);

    res.send("ok ji ");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser, GetData, DeleteData, Data, Update };
