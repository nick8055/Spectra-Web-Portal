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
