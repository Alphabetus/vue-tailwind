require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.port || 3000;
const ToDo = require("./backend/ToDo.js").ToDo;
const toDo = new ToDo();
// eslint-disable-next-line no-unused-vars
const axios = require("axios");
const Db = require("./backend/db.js").DB;
const bodyParser = require("body-parser");
const db = new Db();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // unsafe sex with internet
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); // just bring the payload I will try to parse xD
  next(); // thats what she said
});

app.get("/api/home", (req, res) => {
  // db.sendQuery("INSERT INTO todo (content) VALUES ('lololo')");
  res.send("works");
});

app.post("/api/get", async (req, res) => {
  const todos = await db.getAll();
  await res.send(todos);
});

app.post('/api/post', (req, res) => {
  const q = db.sendQuery(`INSERT INTO todo (content) VALUES ('${req.body.content}')`);
  res.send(true);
})

app.post('/api/delete', async (req, res) => {
  const q = await db.deleteTodo(req.body.id);
  await res.send(q);
});

app.listen(port, () => {
  console.log("Node server running on port :" + port);
});
