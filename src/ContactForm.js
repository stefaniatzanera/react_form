import React, { useState } from 'react';
import './ContactForm.css';
import { useNavigate } from 'react-router-dom';

const ContactForm = ({ onSubmit }) =>{

    const initialState = {
        firstname: '',
        lastname: '',
        mail: '',
        ordernumber: '',
        writehere: ''
    };

    const [isChecked, setIsChecked] = useState(false);
    const [checkboxError, setCheckboxError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [submittedData, setSubmittedData] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const _inputs = e.target.elements;
    
        // for (let i = 0; i < _inputs.length; i++) {
        //   if (_inputs[i].name) {
        //     console.log(_inputs[i].name);
        //   }
        // }

        setSubmittedData({ ...submittedData, ...formData}); //copy form data to final data array
        localStorage.setItem('submittedData', JSON.stringify(formData));
        setSubmitted(true);
        setFormData(initialState);
        
        // navigate('/bonus-form-entry-local-storage'); // Redirect to the second page
        window.open('/bonus-form-entry-local-storage')
    
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        setCheckboxError(false);
    };

    return(
        <div className="formdiv">
            <form
                onSubmit={handleSubmit}
            >
                <div className="title" id="title">
                    Φόρμα Επικοινωνίας
                </div>
                <div className="slc" id="slc">
                    <select>
                        <option value="contactwithdep0">Επιλέξτε τμήμα</option>
                        <option value="contactwithdep1">Επικοινωνία με το τμήμα προσωπικού</option>
                        <option value="contactwithdep2">Επικοινωνία με το τμήμα μάρκετινγκ</option>
                        <option value="contactwithdep3">Επικοινωνία με το τμήμα εξυπηρέτησης πελατών</option>
                    </select>
                </div>
                <div className="fullname" id="fullname">
                    <div className="name" id="name">
                        <input 
                            type="text"
                            name="firstname" 
                            value={formData.firstname}
                            placeholder="Όνομα*" 
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="lstname" id="lstname">
                        <input 
                            type="text"
                            name="lastname" 
                            value={formData.lastname}
                            placeholder="Επώνυμο*"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="info" id="info">
                    <div className="email" id="email">
                            <input type="email" 
                                name="mail"
                                value={formData.mail}
                                placeholder="Email*" 
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="orderid" id="orderid">
                            <input type="number" 
                                name="ordernumber"
                                value={formData.ordernumber}
                                placeholder="Κωδικός παραγγελίας*" 
                                onChange={handleChange}
                                required
                            />
                        </div>
                </div>
                <div className="msg" id="msg">
                    <label className="msgtitle" id="msgtitle" htmlFor="writehere">Μήνυμα</label>
                    <textarea 
                        id="writehere" 
                        name="writehere" 
                        placeholder="Γράψε μας..." 
                        rows="4" 
                        cols="8"
                        value={formData.writehere}
                        onChange={handleChange} 
                        required>
                    </textarea>
                </div>
                <div className="extra" id="extra">
                    <div className="txt" id="txt">
                        *Όλα τα πεδία είναι υποχρεωτικά
                    </div>
                    <div className="check" id="check">
                        <input 
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange} 
                            required
                        />
                        <label>Αποδέχομαι τους <a href="#">Όρους Χρήσης</a></label>
                    </div>
                    {checkboxError && (
                        <div style={{ color: 'red', marginTop: '5px' }}>
                        Παρακαλώ επιβεβαιώστε ότι αποδέχεστε τους όρους χρήσης.
                        </div>
                    )}
                </div>
                <div className="submitbtn" id="submitbtn">
                    <button className='btn' type="submit">
                        Υποβολή →
                    </button>
                </div>
            </form>
            <div className="submitteddata"> 
                {submitted && (
                    <div className="infos">
                        <div className="title" id="title">
                            Υποβλειθέντα στοιχεία:
                        </div>
                        <div className="userinfo">
                            <div>{submittedData.firstname}</div>
                            <div>{submittedData.lastname}</div>
                            <div>{submittedData.mail}</div>
                            <div>#{submittedData.ordernumber}</div> 
                        </div>
                        <div className="usermessage">
                            <label className="msgtitle" id="msgtitle" htmlFor="writehere">Μήνυμα</label>
                            <div className="question">{submittedData.writehere}</div>
                        </div>
                    </div>
                )}
            </div> 
        </div>   
        
    );
};

export default ContactForm;