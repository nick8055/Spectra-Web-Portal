const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://nicholasbranson:Karunya8055$@clusterkitsaiml.rydxbrs.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(function(){
  console.log("DB Connected");
});

const careerSchema = new mongoose.Schema({
  batch:Number,
  company_name:String,
  job_position:String,
  salary:String,
  job_description:String,
  eligibility:String,
  location:String,
  deadline:Date,
  link:String,
})

const Career = mongoose.model('Career',careerSchema);

app.post('/api/careers',async(req,res) => {
  try{
    const {batch,company_name,job_position,salary,job_description,eligibility,location,deadline,link} = req.body; 

    const newCareer = new Career({batch,company_name,job_position,salary,job_description,eligibility,location,deadline,link});

    await newCareer.save();
    res.status(201).send(newCareer);
  }
  catch(error){
    console.error(error);
    res.status(500).send('Server Error');
  }
});

const internshipSchema = new mongoose.Schema({
  batch: Number,
  internship_company_name: String,
  internship_job_position: String,
  internship_stipend: String,
  internship_description: String,
  internship_mode: String,
  internship_location: String,
  internship_duration: String,
  internship_deadline: Date,
  internship_application_link: String
})

const Internship = mongoose.model('Internship',internshipSchema);

app.post('/api/internships',async(req,res) => {
  try{
    const {batch,internship_company_name,internship_job_position,internship_stipend,internship_description,internship_mode,internship_location,internship_duration,internship_deadline,internship_application_link} = req.body; 

    const newInternship = new Internship({batch,internship_company_name,internship_job_position,internship_stipend,internship_description,internship_mode,internship_location,internship_duration,internship_deadline,internship_application_link});

    await newInternship.save();
    res.status(201).send(newInternship);
  }
  catch(error){
    console.error(error);
    res.status(500).send('Server Error');
  }
});

const hackathonSchema = new mongoose.Schema({
  batch: Number,
  event_name: String,
  organizer: String,
  event_description: String,
  hackathon_mode: String,
  hackathon_location: String,
  prizes:String,
  application_deadline: Date,
  application_link: String
})

const Hackathon = mongoose.model('Hackathon',hackathonSchema);

app.post('/api/hackathons',async(req,res) => {
  try{
    const {batch,event_name,organizer,event_description,hackathon_mode,hackathon_location,prizes,application_deadline,application_link} = req.body; 

    const newHackathon = new Hackathon({batch,event_name,organizer,event_description,hackathon_mode,hackathon_location,prizes,application_deadline,application_link});

    await newHackathon.save();
    res.status(201).send(newHackathon);
  }
  catch(error){
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Create Question schema
const questionSchema = new mongoose.Schema({
  subject: String,
  questions: [{
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    correctAnswer: Number,
  }]
});

const Question = mongoose.model('PlacementQuestionnaire', questionSchema);

app.use(bodyParser.json());

// Route to handle adding a new question
app.post('/api/questions', async (req, res) => {
  try {
    const { subject, questions } = req.body;

    const newQuestions = new Question({
      subject,
      questions,
    });

    await newQuestions.save();
    res.status(201).send(newQuestions);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
