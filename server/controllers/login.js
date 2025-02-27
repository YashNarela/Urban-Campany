const LoginModel = require("../models/loginmodel");
const userModel = require("../models/model");
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


    

    res.status(200).json({ success: true, loginrsp: loginRsp });
  } catch (error) {}
};

module.exports = { Login };
