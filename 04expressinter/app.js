const express = require("express");
const app = express();
const PORT = 8000;

var myconsolelog = function (req, res, next) {
  console.log(" I am a MIDDLEWARE");
  next();
};

var serverTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

app.use(serverTime);
app.get("/", (req, res) => {
  res.send("Hello World" + " and time is :" + req.requestTime);
  console.log("Hello world from /");
});

app.listen(PORT, () => console.log(`Server is running at: ${PORT}`));
