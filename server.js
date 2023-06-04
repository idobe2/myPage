const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('myPage.html'));
});

app.get('/myPage.css', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'myPage.css'));
});

let isConnected = false; // Flag to track connection status

async function connect() {
    try {
        const uri = 'mongodb+srv://mongo:eMyPCnryQVvGKtit@cluster0.oqnshnt.mongodb.net/Grades?retryWrites=true&w=majority';
        await mongoose.connect(uri);
        console.log('Connected to URI');
        isConnected = true; // Update the flag when the connection is successful
    } catch (error) {
        console.error('Error connecting to URI: ', error);
        isConnected = false; // Update the flag when the connection fails
    }
}

module.exports = { app, connect, isConnected };
