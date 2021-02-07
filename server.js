require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.port || 3000;
const ToDo = require("./backend/ToDo.js").ToDo;
const toDo = new ToDo();
// eslint-disable-next-line no-unused-vars
const axios = require("axios");
const Db = require("./backend/db.js").DB;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // unsafe sex with internet
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); // just bring the payload I will try to parse xD
  next(); // thats what she said
});

app.get("/api/home", (req, res) => {
  console.log(req.params.content);
  //toDo.saveTodo(req.params.content);
  res.send("works");
});

app.post("/api/get", async (req, res) => {
  const db = new Db();
  const yo = await db.getAll();
  await console.log(yo);
});

app.listen(port, () => {
  console.log("Node server running on port :" + port);
});
