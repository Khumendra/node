const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World ");
});

app.get("/about-us", (req, res) => {
  data = {
    user: "shyam",
    balance: "$2000",
    id: "US-123",
  };

  res.status(200).json(data);
});

// start with : ab
// ends with : cd
// * means anything
app.get("/ab*cd", (req, res) => {
  res.send("<h1>I am regex page. </h1>");
});

app.get("/user/:id/status/:status_id", (req, res) => {
  res.send(req.params);
});
// flight routes
app.get("/flights/:from-:to", (req, res) => {
  res.send(req.params);
});

app.post("/login", (req, res) => {
  res.send("<h1>Login Success</h1>");
});

app.delete("/delete", (req, res) => {
  res.send("<h1>Delete Success</h1>");
});

app.listen(8000, () => {
  console.log("Server is running at 8000...");
});
