import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import logo from './logo.svg';
import {Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Footer />
    </div>
  );
}

export default App;
