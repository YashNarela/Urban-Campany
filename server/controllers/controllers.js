const userModel = require("../models/model");

const createUser = async (req, res) => {
  try {
    console.log(req.body);

    let userrsp = await userModel.create(req.body);
    res.status(200).json({ success: true, rsp: userrsp });
  } catch (error) {}
};

module.exports = { createUser };
