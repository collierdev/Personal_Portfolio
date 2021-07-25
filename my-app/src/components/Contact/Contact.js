import './Contact.css';
import React, { useState } from "react";
const Contact = (props) =>{
  
    return (
        <div className='topography-pattern contact'>
                <p className="hero-header"><em className="name">Contact Me</em></p>
                 <form >
                  <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required />
                  </div>
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                  </div>
                  <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" required />
                  </div>
                  <button type="submit"></button>
                 </form>
        </div>
        
    );
  }
  export default Contact;