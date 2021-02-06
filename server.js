require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.port || 3000;
const ToDo = require('./backend/ToDo.js').ToDo;
const toDo = new ToDo;


app.get('/api/home', (req, res) => {
    toDo.t()
    res.send("works");
})


app.listen(port, () => {
    console.log("Node server running on port :" + port );
})