const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/api/home', (req, res) => {
    res.send("works");
})


app.listen(port, () => {
    console.log("Node server running on port :" + port );
})