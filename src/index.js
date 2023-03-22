import express from 'express';
import path from 'path';

const port = process.env.port || 3000;
const app = express();

app.get('/example/class', (req, res) => {
    console.log('New request arrived from class');
    res.send('<h1>Hi from class</h1>');
});

app.get('/example', (req, res) => {
    console.log('New request arrived');
    res.sendFile( path.resolve('index.html') );
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
