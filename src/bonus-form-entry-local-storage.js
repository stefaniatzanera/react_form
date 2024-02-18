import React, { useEffect, useState } from 'react';
import './ContactForm.css';
import logo from './logo.jpg';

const BonusFormEntryLocalStorage = () => {
  const [submittedData, setSubmittedData] = useState(null);
  
  useEffect(() => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem('submittedData');
    console.log(storedData);
    if (storedData) {
        setSubmittedData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="bonus1">  
    {submittedData && (
                    <div className="bonus">
                        <div className="logo2" id="logo2">
                          <img src={logo} className="logo-logo" alt="logo-logo" />
                        </div>
                        <div className="submitteddatainotherpage">
                          <div className="bns">
                            <div className="title2" id="title2">
                                Υποβλειθέντα στοιχεία:
                            </div>
                            <div className="userinfo2">
                                <div>{submittedData.firstname}</div>
                                <div>{submittedData.lastname}</div>
                                <div>{submittedData.mail}</div>
                                <div>#{submittedData.ordernumber}</div> 
                            </div>
                            <div className="usermessage2">
                                <label className="msgtitle" id="msgtitle" htmlFor="writehere">Μήνυμα</label>
                                <div className="question">{submittedData.writehere}</div>
                            </div>
                            <div className="backbtn" id="backbtn">
                                <button className='bck' onClick={() => window.close()}>
                                  Επιστροφή
                                </button>
                            </div>
                          </div>  
                        </div>  
                    </div>
                    )}
            </div> 
            
  );
}
export default BonusFormEntryLocalStorage;
