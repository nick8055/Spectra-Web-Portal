import React, { useState } from 'react';
import './internship.css';

function Internship(){
    const currentyear = new Date().getFullYear();
    const [Location, setLocation] = useState(false)

    const [formData, setFormData] = useState({
        batch: '',
  internship_company_name: '',
  internship_job_position: '',
  internship_stipend: '',
  internship_description: '',
  internship_mode: '',
  internship_location: '',
  internship_duration:'',
  internship_deadline: '',
  internship_application_link: '',
    });
    
    function selection(event) {
        if (event.target.value === 'Onsite') {
            setLocation(true);
        } else {
            setLocation(false);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await fetch('http://localhost:5000/api/internships', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                console.log('Internship details submitted successfully!');
                setFormData({
                    batch: '',
                    internship_company_name: '',
                    internship_job_position: '',
                    internship_stipend: '',
                    internship_description: '',
                    internship_mode: '',
                    internship_location: '',
                    internship_duration:'',
                    internship_deadline: '',
                    internship_application_link: '',
                });
                window.alert('Internship details submitted successfully!');
            } else {
                console.error('Failed to submit Internship details.');
                window.alert('Failed to submit Internship details.');
            }
        } catch (error) {
            console.error('Error:', error);
            window.alert('Error: Failed to submit Internship details.');
        }
    };
    

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    return(
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                
               <h1 className='form-title'>INTERNSHIP</h1><br/>
               <div className='title-border-container'>
                <div className='title-border'></div>
               </div>
               <br/><br/>

               <label className='batch-label'>BATCH</label>
               <select class='form-select' id='batch' value={formData.batch} onChange={handleChange}>
               <option value='select'>select</option>
                   <option value={currentyear + 1}>{currentyear + 1}</option>
                   <option value={currentyear + 1}>{currentyear + 2}</option>
               </select>
               <br/><br/>

               <label>Name of the Company *</label>
               <br/><br/>
               <input className="form-control" id='internship_company_name' type="text" value={formData.internship_company_name} onChange={handleChange} required/>
               <br/><br/><br/>

               <label>Logo of the Company</label>
               <br/><br/>
               <input className="form-control" type='file' id='internship_company_logo'></input>
               <br/><br/><br/>

               <label>Internship Title *</label>
               <br/><br/>
               <input className="form-control" type='text' id='internship_job_position' value={formData.internship_job_position} onChange={handleChange} required></input>
               <br/><br/> <br/>

               <label>Stipend *</label>
               <br/><br/>
               <input className="form-control" type='text' id='internship_stipend' value={formData.internship_stipend} onChange={handleChange} required></input>
               <br/><br/><br/>

               <label>Internship Description *</label>
               <br/><br/>
               <textarea className="form-control" id='internship_description' value={formData.internship_description} onChange={handleChange} required></textarea>
               <br/><br/><br/>

               <label>Mode of Internship *</label><br/>
                <select class='form-select' id='internship_mode' value={formData.internship_mode} onChange={(e) => {handleChange(e); selection(e);}}>
                    <option value='select'>select</option>
                    <option value='Remote'>Remote</option>
                    <option value='Onsite'>On-site</option>
                </select><br/><br/><br/>

                {Location && (<><label for='internship_location'>Location</label><br/><br/>
                <input type='text' value={formData.internship_location} onChange={handleChange} id='internship_location' class='form-control'></input><br></br><br/><br/></>)}

                <label>Duration *</label><br/><br/>
                <input class="form-control" type='text' id='internship_duration' value={formData.internship_duration} onChange={handleChange} required></input><br/><br/><br/>

               <label>Application Deadline *</label>
               <br/><br/>
               <input class="form-control" type='date' id='internship_deadline' value={formData.internship_deadline} onChange={handleChange} required></input>
               <br/><br/><br/>

               <label>Application Link</label>
               <br/><br/>
               <input className="form-control" type='text' id='internship_application_link' value={formData.internship_application_link} onChange={handleChange}></input>
               <br/><br/><br/>

               <div className='button-container'>
                    <button className="btn btn-primary btn-sm" type='submit' id='internship-post'>Post</button>
               </div>
               <br/><br/>

            </form>
        </div>
    )
}

export default Internship;
