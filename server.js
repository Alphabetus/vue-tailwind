require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.SERVER_PORT || 3000;
const Db = require("./backend/db.js").DB;
const bodyParser = require("body-parser");
const db = new Db();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // safer now, can improve with headers, tokens and so on
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); // just bring the payload I will try to parse xD
  next(); // thats what she said
});

app.get("/api/home", (req, res) => {
  res.send("works");
});

app.post("/api/get", async (req, res) => {
  const todos = await db.getAll();
  await res.send(todos);
});

app.post('/api/post', async (req, res) => {
  const q = await db.sendQuery(`INSERT INTO todo (content) VALUES ('${req.body.content}')`);
  await res.send(q);
})

app.post('/api/delete', async (req, res) => {
  const q = await db.deleteTodo(req.body.id);
  await res.send(q);
});

app.listen(port, () => {
  console.log("Node server running on port :" + port);
});
