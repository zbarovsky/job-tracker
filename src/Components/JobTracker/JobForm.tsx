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
            <form>
                <input type='text' placeholder='Job Title'/>
                <input  type='text' placeholder='Link to Job App'/>
                <input type='text' placeholder='Company'/>
                <label> Contact Information:
                    <input type='text' placeholder='Contact Name'/>
                    <input type='email' placeholder='Email'/>
                    <input type='text' placeholder='Phone Number'/>
                </label>
                <select placeholder='Status'>
                    <option>Applied</option>
                    <option>Reached Out</option>
                    <option>Phone Screen</option>
                    <option>Interview</option>
                    <option>Rejected</option>
                    <option>Accepted</option>
                </select>
                <input type='date' placeholder='date'/> 
                <button>Add</button>
            </form>
        </div>
    )
}
export default JobForm;