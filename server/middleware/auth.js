var jwt = require("jsonwebtoken");

require("dotenv").config();
const Auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    console.log(token);

    if (!token) {
      return res.status(401).json({ msg: "Unauthorized, token is missing!" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECERT);
    console.log("AFTER DECODE:", decoded);


    req.user = decoded.token;

next()
  } catch (error) {
    console.log(error);

    res.status(400).json({ msg: "Invalid token" });
  }
};

const isAdmin = async (req, res, next) => {
  try {


        res.send("Authorized");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Auth, isAdmin };
