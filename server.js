require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.port || 3000;
const ToDo = require('./backend/ToDo.js').ToDo;
const toDo = new ToDo;
const axios = require("axios");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // unsafe sex with internet
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // just bring the payload I will try to parse xD
    next(); // thats what she said
})

app.get('/api/home', (req, res) => {
    console.log(req.params.content)
    //toDo.saveTodo(req.params.content);
    res.send("works");
})

app.post('/api/get', (req, res) => {
    const todos = toDo.getJsonTodos();
    res.send(todos);
});


app.listen(port, () => {
    console.log("Node server running on port :" + port );
})