import React from 'react';
import logo from './logo.jpg';
import background from './background.jpg';
import ContactForm from './ContactForm';
import './App.css';
import './ContactForm';

const MainPage = () => {
    return (
        <div className="App">
          <div className="logo" id="logo">
            <img src={logo} className="logo-logo" alt="logo-logo" />
          </div>
    
          <div className="secondrow" id="secondrow">
            ΑΡΧΙΚΗ/ <b>ΦΟΡΜΑ ΕΠΙΚΟΙΝΩΝΙΑΣ</b>
          </div>
    
          <div className="container">
            <div className="backgroundbanner" id="backgroundbanner">
              <img src={background} className="background-logo" alt="background-logo" />
            </div>
    
            <div className="form">
              <ContactForm />
            </div>
          </div>
    
        </div>  
      );
};

export default MainPage;