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

app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve('login.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve('about.html'));
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
