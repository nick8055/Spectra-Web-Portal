import React from 'react';
import './career.css'
function Career(){
    const currentyear = new Date().getFullYear();

    return(
        <div className='form-container'>
           <form>

               <h1 className='form-title'>CAREER</h1><br/>
               <div className='title-border-container'>
                <div className='title-border'></div>
               </div>
               <br/><br/>

               <label className='batch-label'>BATCH</label>
               <select class='form-select'>
                   <option value={currentyear + 1}>{currentyear + 1}</option>
                   <option value={currentyear + 1}>{currentyear + 2}</option>
               </select>
               <br/><br/>

               <label>Name of the Company *</label>
               <br/><br/>
               <input className="form-control" id='company-name' type="text" required/>
               <br/><br/><br/>

               <label>Logo of the Company</label>
               <br/><br/>
               <input className="form-control" type='file'></input>
               <br/><br/><br/>


               <label>Job Title *</label>
               <br/><br/>
               <input className="form-control" type='text' id='job-position' required></input>
               <br/><br/> <br/>

               <label>Salary *</label>
               <br/><br/>
               <input className="form-control" type='text' id='salary' required></input>
               <br/><br/><br/>

               <label>Job Description *</label>
               <br/><br/>
               <textarea className="form-control" id='skills-required' required></textarea>
               <br/><br/><br/>

               <label>Eligibility</label>
               <br/><br/>
               <input className="form-control" type='text' id='eligibility'></input>
               <br/><br/><br/>

               <label>Location *</label>
               <br/><br/>
               <input className="form-control" type='text' id='eligibility' required></input>
               <br/><br/><br/>

               <label>Application Deadline *</label>
               <br/><br/>
               <input class="form-control" type='date' id='deadline' required></input>
               <br/><br/><br/>

               <label>Application Link</label>
               <br/><br/>
               <input className="form-control" type='text' id='link'></input>
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
