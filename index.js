/* eslint-disable */
const app = require('./server');
const mongoose = require('mongoose');
const uri = 'mongodb+srv://mongo:eMyPCnryQVvGKtit@cluster0.oqnshnt.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
    try {
        await mongoose.connect(uri);
        if (process.env.NODE_ENV === 'Grades') {
            console.log('Grades - Connected to URI');
        } else {
            console.log('Connected to URI');
        }
    } catch (error) {
        console.error('Error connecting to URI: ', error);
    }
}

connect();

const document = new mongoose.Schema({
    fullName: String,
    grade1: Number,
    grade2: Number,
    grade3: Number,
  });

  const Grades = mongoose.model('Grades', document);

  app.post('/submit-form', async (req, res) => {
    const { fullName, grade1, grade2, grade3 } = req.body;
    // Connection URL and database name
    const Students = new Grades({
        fullName,
        grade1,
        grade2,
        grade3
    });

    try {
        await Students.save();
        console.log('Grades saved successfully');
        res.sendStatus(200);
    } catch (err) {
        console.error("Error saving grades to database :", err);
        res.sendStatus(500);
    }
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
