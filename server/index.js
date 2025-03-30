const express = require("express");
const cors = require("cors");
const { connectDb } = require("./connection/connect");
var bodyParser = require("body-parser");

const app = express();

require("dotenv").config();

app.use(cors());


app.use("/static"  ,express.static("uploads"));
var jsonParser = bodyParser.json();

app.use(jsonParser)

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser)
const route = require("./routers/router");

const port = process.env.PORT || 4000;

app.use("/user", route);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

connectDb();
