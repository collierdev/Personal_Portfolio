import './Contact.css';
import React, { useState } from "react";
import {useForm} from 'react-hook-form'
import Socials from "../Socials/Socials"
const Contact = (props) =>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));
    return (
      <div className="contact-page" id={props.id}>
        <div className='contact-container'>
          <div className='contact-left'>
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-content">Lorem ipsum</p>
            <Socials color="#4A4A4A"></Socials>
          </div>
          <div className='contact-right'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name">Name *</label>
                <input {...register("name")} placeholder="Name" type="text" id="name" required />
              </div>
              <div>
                <label htmlFor="email">Email *</label>
                <input {...register("email")} placeholder="Email" type="email" id="email" required />
              </div>
              <div>
                <label htmlFor="message">Message *</label>
                <textarea {...register("message") }placeholder="Your message here" id="message" required />
              </div>
              <p>{result}</p>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
        
    );
  }
  export default Contact;