const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

const { expect } = chai;

chai.use(chaiHttp);

app.post('/submit-form', async (req, res) => {
  const {
    fullName, grade1, grade2, grade3,
  } = req.body;

  const student = new Grades({
    fullName,
    grade1,
    grade2,
    grade3,
  });

  try {
    await student.save(); // Save the student instance
    console.log('Grades saved successfully');
    res.sendStatus(200); // Send a successful response
  } catch (err) {
    console.error('Error saving grades to database:', err);
    res.sendStatus(500);
  }
});


describe('GET /get-grades', () => {
  it('should return an array of grades from the database', function (done) {
    this.timeout(5000); // Set the timeout to 5 seconds

    chai.request(app)
      .get('/get-grades')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});

