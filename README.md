# Job Tracker Web App

## Build:
- Frontend: React
- Backend: flask/python? Maybe JS?

## APP: Build web app that can track a job that user has applied for such as:
- title of job
- company
- date submitted
- status
- app link
- connections

### AAU:
- I want to be able to track my job apps from submitted onwards
- I want to be able to edit/update previously submitted applications
- I want to see analytics of how many jobs have been applied to and their status

### Layout
- landing page: login? -> if logged in then land to list of applied for jobs
- page for jobs (cards?) -- edit jobs
- page to add new job to list
- page to see overal analytics

## TODO:

### Frontend

- [ ] landing page component
    - [ ] sign in/sign up
- [ ] view job page
    - [ ] ability to add job
        - [ ] title
        - [ ] company
        - [ ] date applied
        - [ ] status
        - [ ] link
        - [ ] connections
    - [ ] ability to edit job
- [ ] view analytics page
    - [ ] total amount of jobs applied for
    - [ ] amount of next steps (i.e. emails, rejections, etc.)

### Backend:

- [ ] user auth
    - [ ] email
    - [ ] password
- [ ] track jobs
    - [ ] title
    - [ ] company
    - [ ] date
    - [ ] status
    - [ ] link
    - [ ] connections