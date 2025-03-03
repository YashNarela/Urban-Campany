const LoginModel = require("../models/loginmodel");
const userModel = require("../models/model");
var jwt = require("jsonwebtoken");
require("dotenv").config();
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let loginRsp = await userModel.findOne({ email });
    console.log(loginRsp);

    if (!loginRsp.email || !loginRsp.password) {
      res.status(400).json({ msg: "Invalid Credintials" });
    }

    if (password != loginRsp.password) {
      return res.status(400).json({ msg: "Invalid password" });
    }

    const payload = {
      token: loginRsp,
    };

    let jwttoken = await jwt.sign(payload, process.env.JWT_SECERT, {
      expiresIn: "1h",
    });
    console.log(jwttoken);

    res.status(200).json({ success: true, toki: jwttoken, loginrsp: loginRsp });
  } catch (error) {}
};

module.exports = { Login };
