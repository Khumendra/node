const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/login", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Hello My Application");
});

app.post("/login", (req, res) => {
    console.log('Email :',req.body)
   
    // do some database process
    res.redirect("/")
});

app.listen(8000, ()=>{
    console.log(`Server is running at : 8000`);
})