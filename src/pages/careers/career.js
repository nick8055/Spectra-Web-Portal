import React, { useState } from 'react';
import './career.css'
function Career(){
    const currentyear = new Date().getFullYear();

    const [formData, setFormData] = useState({
        batch:'',
  company_name:'',
  job_position:'',
  salary:'',
  job_description:'',
  eligibility:'',
  location:'',
  deadline:'',
  link:'',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/careers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Job details submitted successfully!');
                setFormData({
                    batch:'',
  company_name:'',
  job_position:'',
  salary:'',
  job_description:'',
  eligibility:'',
  location:'',
  deadline:'',
  link:'',
                });
                window.alert('Job details submitted successfully!');
            } else {
                console.error('Failed to submit Job details.');
                window.alert('Failed to submit Job details.');
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

    return(
        <div className='form-container'>
           <form onSubmit={handleSubmit}>
               <h1 className='form-title'>CAREER</h1><br/>
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
               <input className="form-control" id='company_name' type="text"  value={formData.company_name} onChange={handleChange} required/>
               <br/><br/><br/>

               <label>Logo of the Company</label>
               <br/><br/>
               <input className="form-control" type='file' id='logo'></input>
               <br/><br/><br/>

               <label>Job Title *</label>
               <br/><br/>
               <input className="form-control" type='text' id='job_position' required value={formData.job_position} onChange={handleChange}></input>
               <br/><br/> <br/>

               <label>Salary *</label>
               <br/><br/>
               <input className="form-control" type='text' id='salary' required value={formData.salary} onChange={handleChange}></input>
               <br/><br/><br/>

               <label>Job Description *</label>
               <br/><br/>
               <textarea className="form-control" id='job_description' required value={formData.job_description} onChange={handleChange}></textarea>
               <br/><br/><br/>

               <label>Eligibility</label>
               <br/><br/>
               <input className="form-control" type='text' id='eligibility' value={formData.eligibility} onChange={handleChange}></input>
               <br/><br/><br/>

               <label>Location *</label>
               <br/><br/>
               <input className="form-control" type='text' id='location' required value={formData.location} onChange={handleChange}></input>
               <br/><br/><br/>

               <label>Application Deadline *</label>
               <br/><br/>
               <input class="form-control" type='date' id='deadline' required value={formData.deadline} onChange={handleChange}></input>
               <br/><br/><br/>

               <label>Application Link</label>
               <br/><br/>
               <input className="form-control" type='text' id='link' value={formData.link} onChange={handleChange}></input>
               <br/><br/><br/>
               
               <div className='button-container'>
                    <button className="btn btn-primary btn-sm" type='submit' id='career-post'>Post</button>
               </div>
               <br/><br/>

           </form>
       </div>
   )
}

export default Career
