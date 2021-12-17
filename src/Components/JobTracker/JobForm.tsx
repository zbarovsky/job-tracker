import React from 'react'
import {useState, useEffect} from 'react'

interface JobFormProps {

}

interface ContactInfoInterface {
    name?: string
    email?: string
    phoneNumber?: string
}

const JobForm: React.FC<JobFormProps> = () => {

    /*
    TODO:
    style
    provide state updates for form elements
    button functionality
    Pass form info to list component
    */



    const [title, setTitle] = useState<string>('')
    const [jobLink, setJobLink] = useState<string>('')
    const [company, setCompany] = useState<string>('')
    const [contactInfo, setContactInfo] = useState<ContactInfoInterface>({name: '', email: '', phoneNumber: ''})
    const [status, setStatus] = useState<string>('')
    const [date, setDate] = useState<string>('')

    return (
        <div>
            <div className='job-form-div'>
                <form className='job-form'>
                    <label className='visuallyHidden'>Job Title</label>
                    <input className='job-form-input1' type='text' placeholder='Job Title'/>
                    <label className='visuallyHidden'>Link to Job App</label>
                    <input className='job-form-input1'  type='text' placeholder='Link to Job App'/>
                    <label className='visuallyHidden'>Company Name</label>
                    <input className='job-form-input1' type='text' placeholder='Company'/>
                    <label className='job-form-contact-label visuallyHidden'> Contact Information: </label> 
                        <input className='job-form-input-contact' type='text' placeholder='Contact Name'/>
                        <input className='job-form-input-contact' type='email' placeholder='Email'/>
                        <input className='job-form-input-contact' type='text' placeholder='Phone Number'/>
                    <label className='visuallyHidden'>Status of Application</label>
                    <select className='job-form-status' placeholder='Status'>
                        <option>Status</option>
                        <option>Applied</option>
                        <option>Reached Out</option>
                        <option>Phone Screen</option>
                        <option>Interview</option>
                        <option>Rejected</option>
                        <option>Accepted</option>
                    </select>
                    <label className='job-form-date-label'>Date Applied: </label>
                    <input className='job-form-date' type='date' placeholder='date'/> 
                    <button className='job-form-button-grid'>Add</button>
                </form>
            </div>
        </div>
    )
}
export default JobForm;