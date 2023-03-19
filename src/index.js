const express = require('express');
const path = require("path");
const port = process.env.port || 3000;
const app = express();

app.get('/example',
    (req, res) => {
        console.log("new request arrived");
        res.sendFile(path.join(__dirname, '/index.html'));
    })
app.listen(port, ()=>{
    console.log("server is running at port")
})