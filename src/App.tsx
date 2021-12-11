import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import JobTracker from './Components/JobTracker/JobTracker';
import {Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <JobTracker />
      <Footer />
    </div>
  );
}

export default App;
