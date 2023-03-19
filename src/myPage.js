const express = require('express');
const port = process.env.port || 3000;
const app = express();

app.get('/example',
    (req, res) => {
        console.log("new request arrived");
        res.send('<h1>Hi from server</h1>');
    })
app.listen(port, ()=>{
    console.log("server is running at port")
})