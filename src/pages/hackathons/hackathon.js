import React, { useState } from 'react';
import './hackathon.css';

function Hackathon() {
    const currentYear = new Date().getFullYear();
    const [Location, setLocation] = useState(false);
    const [formData, setFormData] = useState({
        batch: '',
        event_name: '',
        organizer: '',
        event_description: '',
        hackathon_mode: 'Online',
        hackathon_location: '',
        prizes: '',
        application_deadline: '',
        application_link: '',
    });

    function selection(event) {
        if (event.target.value === 'Offline') {
            setLocation(true);
        } else {
            setLocation(false);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/hackathons', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Hackathon details submitted successfully!');
                setFormData({
                    batch: '',
                    event_name: '',
                    organizer: '',
                    event_description: '',
                    hackathon_mode: 'Online',
                    hackathon_location: '',
                    prizes: '',
                    application_deadline: '',
                    application_link: '',
                });
                window.alert('Hackathon details submitted successfully!');
            } else {
                console.error('Failed to submit hackathon details.');
                window.alert('Failed to submit hackathon details.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h1 className='form-title'>HACKATHON</h1><br />
                <div className='title-border-container'>
                    <div className='title-border'></div>
                </div>
                <br /><br />

                <label className='batch-label'>BATCH</label>
                <select className='form-select' id='batch' value={formData.batch} onChange={handleChange}>
                  <option value='select'></option>
                    <option value={currentYear + 1}>{currentYear + 1}</option>
                    <option value={currentYear + 2}>{currentYear + 2}</option>
                </select>
                <br /><br />

                <label>Name of the Event *</label>
                <br /><br />
                <input className="form-control" id='event_name' type="text" value={formData.event_name} onChange={handleChange} required />
                <br /><br /><br />

                <label>Name of the Organizer *</label>
                <br /><br />
                <input className="form-control" id='organizer' type="text" value={formData.organizer} onChange={handleChange} required />
                <br /><br /><br />

                <label>Event Description *</label>
                <br /><br />
                <textarea className="form-control" id='event_description' value={formData.event_description} onChange={handleChange} required></textarea>
                <br /><br /><br />

                <label>Mode of Hackathon *</label><br />
                <select className='form-select' id='hackathon_mode' value={formData.hackathon_mode} onChange={(e) => {handleChange(e); selection(e);}}>
                    <option value='Online'>Online</option>
                    <option value='Offline'>Offline</option>
                </select>

                {Location && (
                    <>
                        <br /><br /><br /><label htmlFor='hackathon_location'>Location</label><br />
                        <input type='text' id='hackathon_location' className='form-control' value={formData.hackathon_location} onChange={handleChange}></input><br></br>
                    </>
                )}
                <br /><br /><br />

                <label>Prizes *</label>
                <br /><br />
                <input className="form-control" type='text' id='prizes' value={formData.prizes} onChange={handleChange} required></input>
                <br /><br /><br />

                <label>Application Deadline *</label>
                <br /><br />
                <input className="form-control" type='date' id='application_deadline' value={formData.application_deadline} onChange={handleChange} required></input>
                <br /><br /><br />

                <label>Application Link</label>
                <br /><br />
                <input className="form-control" type='text' id='application_link' value={formData.application_link} onChange={handleChange}></input>
                <br /><br /><br />

                <div className='button-container'>
                    <button className="btn btn-primary btn-sm" type='submit' id='career-post'>Post</button>
                </div>
                <br /><br />

            </form>
        </div>
    );
}

export default Hackathon;
