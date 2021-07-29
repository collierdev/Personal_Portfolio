import './Contact.css';
import React, { useState } from "react";
import {useForm} from 'react-hook-form'
const Contact = (props) =>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
      <div className="contact-page">
        <div className='contact-container'>
          <div className='contact-left'>
            <p>Contact Me</p>
          </div>
          <div className='contact-right'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name">Name:</label>
                <input {...register("name")}  type="text" id="name" required />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input {...register("email")} type="email" id="email" required />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea {...register("message")} id="message" required />
              </div>
              <button type="submit"></button>
            </form>
          </div>
        </div>
      </div>
        
    );
  }
  export default Contact;