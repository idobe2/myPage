import express from "express";
import path from 'path';
// const express = require('express');
// const path = require("path");
const port = process.env.port || 3000;
const app = express();


app.get('/example/class',
    (req, res) => {
        console.log("New request arrived");
        res.send('<h1>Hi from class</h1>');
    });

app.get('/example',
    (req, res) => {
        console.log('New request arrived');
        res.sendFile(path.join(__dirname, '/index.html'));
        // res.send('<h1><Hi from server</h1>');
    });
app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
});
