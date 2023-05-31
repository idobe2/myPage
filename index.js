/* eslint-disable */
const app = require('./server');
const mongoose = require('mongoose');
const uri = 'mongodb+srv://mongo:eMyPCnryQVvGKtit@cluster0.oqnshnt.mongodb.net/Grades?retryWrites=true&w=majority';

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log('Connected to URI');
    } catch (error) {
        console.error('Error connecting to URI: ', error);
    }
}

connect();

const gradeSchema = new mongoose.Schema({
    fullName: String,
    grade1: Number,
    grade2: Number,
    grade3: Number,
});

const Grades = mongoose.model('Students', gradeSchema); // Use 'Students' as the model name

app.post('/submit-form', async (req, res) => {
    const { fullName, grade1, grade2, grade3 } = req.body;

    const student = new Grades({
        fullName,
        grade1,
        grade2,
        grade3,
    });

    try {
        await student.save(); // Save the student instance
        console.log('Grades saved successfully');
        res.sendStatus(200);
    } catch (err) {
        console.error('Error saving grades to database:', err);
        res.sendStatus(500);
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
