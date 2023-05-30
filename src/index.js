import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const port = process.env.port || 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    console.log('New request arrived');
    res.sendFile(path.resolve('index.html'));
});

app.get('/index.css', (req, res) => {
    res.sendFile(path.resolve('index.css'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve('login.html'));
});

app.get('/login.css', (req, res) => {
    res.sendFile(path.resolve('login.css'));
});

app.get('/index.html', (req, res) => {
    console.log('New request arrived');
    res.sendFile(path.resolve('index.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.resolve('about.html'));
});

app.get('/about.css', (req, res) => {
    res.sendFile(path.resolve('about.css'));
});

app.get('/signup.html', (req, res) => {
    res.sendFile(path.resolve('signup.html'));
});

app.get('/signup.css', (req, res) => {
    res.sendFile(path.resolve('signup.css'));
});

app.get('/myPage.html', (req, res) => {
    res.sendFile(path.resolve('myPage.html'));
});

app.get('/myPage.css', (req, res) => {
    res.sendFile(path.resolve('myPage.css'));
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
