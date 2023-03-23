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

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`Login request received: username=${username}, password=${password}`);
    res.send('Login successful!');
});


app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});

