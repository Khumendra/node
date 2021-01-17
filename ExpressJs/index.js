const express = require("express");
const port = 8000;
const host = "http://localhost:";

const app = express();

app
  .get("/", (req, res) => {
    res.send("Hello World" );
  })
  .listen(port, () => {
    console.log(`Listening on ${host}${port}/`);
  });
