const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('myPage.html'));
});

app.get('/myPage.css', (req, res) => {
    res.sendFile(path.resolve('myPage.css'));
});

module.exports = app;