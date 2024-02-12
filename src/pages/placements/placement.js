// 

import React, { useState } from 'react';
import './placement.css';

function Placement() {
    const [successMessage, setSuccessMessage] = useState('');
    const [failMessage, setFailMessage] = useState('');
    const [formData, setFormData] = useState({
        subject: '',
        questions: [{
            question: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            correctAnswer: '',
        }]
    });
    const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission

    const handleChange = (e, questionIndex, field) => {
        const { value } = e.target;
        const newFormData = { ...formData };
        newFormData.questions[questionIndex][field] = value;
        setFormData(newFormData);
    };

    const addQuestion = () => {
        const newFormData = { ...formData };
        newFormData.questions.push({
            question: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            correctAnswer: '',
        });
        setFormData(newFormData);
    };

    const removeLastQuestion = () => {
        if (formData.questions.length > 1) {
            const newFormData = { ...formData };
            newFormData.questions.pop();
            setFormData(newFormData);
        } else {
            alert("At least one question is required.");
        }
    };
    

    const handleSubmit = async (e) => {
        // e.preventDefault();
        setIsSubmitting(true); // Set isSubmitting to true when form is being submitted
        try {
            const response = await fetch('http://localhost:5000/api/questions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Question added successfully!');
                setSuccessMessage("Successfully added question to Database");
                window.alert("Question(s) successfully uplaoded to Pool");

            } else {
                e.preventDefault();
                console.error('Failed to add question');
                setFailMessage("Backend Error. Please try again later..");
                window.alert("Backend Error. Please try again later..");

            }
        } catch (error) {
            e.preventDefault();
            console.error('Error:', error);
            setFailMessage("Server Unavailable.. Please Try Again later");
            window.alert("Server Unavailable.. Please Try Again later");

        } finally {
            setIsSubmitting(false); // Set isSubmitting to false after form submission (whether success or failure)
            setTimeout(() => {
                setSuccessMessage('');
                setFailMessage('');
            }, 2000); // Fading after 2 seconds
        }
    };

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h1 className='form-title'>PLACEMENT QUESTIONNAIRE</h1><br />
                <div className='title-border-container'>
                    <div className='title-border'></div>
                </div>
                <br /><br />

                <label className='batch-label' htmlFor="subject">Subject Name</label>
                <select id='subject' className='subject-select' onChange={(e) => setFormData({...formData, subject: e.target.value})} value={formData.subject} required>
                    <option value=''>Select Subject</option>
                    <option value='DSA'>Data-Structures and Algorithms</option>
                    <option value='IOT'>Internet of Things</option>
                    <option value='OS'>Operating Systems</option>
                    <option value='WT'>Web Technology</option>
                    <option value='Python'>Python Programming</option>
                    <option value='C'>C Programming</option>
                    <option value='Java'>Java Programming</option>
                    <option value='ML'>Machine Learning Concepts</option>
                    <option value='DB'>Database Concepts</option>
                    <option value='CN'>Computer Networking Concepts</option>
                    <option value='CYCN'>Cybersecurity and Cryptography Concepts</option>
                </select>
                <br /><br />

                {formData.questions.map((question, index) => (
                    <div style={{backgroundColor: 'white'}} key={index}>
                        <label htmlFor={`question${index}`}>Question {index} *</label>
                        <br /><br />
                        <textarea id={`question${index}`} className="form-control" 
                        onChange={(e) => handleChange(e, index, 'question')} 
                        value={question.question} 
                        required></textarea>
                        <br /><br /><br />

                        <label htmlFor={`option1${index}`}>Option 1:</label><br />
                        <input type='text' id={`option1${index}`} value={question.option1} onChange={(e) => handleChange(e, index, 'option1')} className='form-control' required></input><br /><br />

                        <label htmlFor={`option2${index}`}>Option 2:</label><br />
                        <input type='text' id={`option2${index}`} value={question.option2} onChange={(e) => handleChange(e, index, 'option2')} className='form-control' required></input><br /><br />

                        <label htmlFor={`option3${index}`}>Option 3:</label><br />
                        <input type='text' id={`option3${index}`} value={question.option3} onChange={(e) => handleChange(e, index, 'option3')} className='form-control' required></input><br /><br />

                        <label htmlFor={`option4${index}`}>Option 4:</label><br />
                        <input type='text' id={`option4${index}`} value={question.option4} onChange={(e) => handleChange(e, index, 'option4')} className='form-control' required></input><br /><br />

                        <label className='batch-label' htmlFor={`correctAnswer${index}`}>Select Correct Option:</label>
                        <select id={`correctAnswer${index}`} onChange={(e) => handleChange(e, index, 'correctAnswer')} value={question.correctAnswer} required>
                            <option value=''>Nil</option>
                            <option value={1}>Option 1</option>
                            <option value={2}>Option 2</option>
                            <option value={3}>Option 3</option>
                            <option value={4}>Option 4</option>
                        </select>
                        <br /><br /><br />
                    </div>
                ))}

                <div className='button-container-placement'>
                    <button type="button" onClick={addQuestion} className="placement-button btn btn-primary btn-sm">
                        Add 1 more question
                    </button>
                    <button type="button" onClick={removeLastQuestion} className="placement-button btn btn-primary btn-sm">
                        Remove last added question
                    </button>
                    <button type="submit" className="placement-button btn btn-primary btn-sm" disabled={isSubmitting}>
                        {isSubmitting ? 'Adding...' : 'Add question to pool'}
                    </button>
                </div>

                {successMessage &&
                    <div className={`success-message ${successMessage ? '' : 'hidden'}`}>{successMessage}</div>
                }

                {failMessage &&
                    <div className="error-message">{failMessage}</div>
                }

            </form>
        </div>
    );
}

export default Placement;
