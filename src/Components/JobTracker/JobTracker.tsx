import React from 'react'
import JobForm from './JobForm';
import JobList from './JobList';
import JobDesc from './JobDesc';

interface JobTrackerProps {

}

const JobTracker: React.FC<JobTrackerProps> = () => {
    return (
        <div>
            <JobForm />
        </div>
    )
}

export default JobTracker