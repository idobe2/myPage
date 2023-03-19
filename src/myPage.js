const express = require('express');
const port = process.env.port || 3000;
const app = express();

app.get('/example',
    (req, res) => {
        console.log("new request arrived");
        res.send('<!doctype html>' +
            '<html>' +
            '<body>' +
            '<header>' +
            '<h1>Hi from server</h1>' +
            '<form>' +
            '<label>Username:</label><input type="text"><br>' +
            '<label>Password:</label><input type="password"><br>' +
            '<button>Login</button>' +
            '</form>' +
            '</header>' +
            '<main>' +
            '<div' +
            '<h2>Contact Us</h2>' +
            '<p>Email: idobenoun@gmail.com</p>' +
            '</div>' +
            '</main>' +
            '<footer>' +
            '<h2>Social Media</h2>' +
            '<div>' +
            '<a href="https://www.linkedin.com/in/ido-ben-noun-b01202237/"' +
            '<img src="https://mimo.app/i/linkedin.png">' +
            '</a>' +
            '</div>' +
            '</footer>' +
            '</body>' +
            '</html>');
    })
app.listen(port, ()=>{
    console.log("server is running at port")
})