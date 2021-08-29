import './Contact.css';
import React, { useState,useEffect } from "react";
import {useForm} from 'react-hook-form'
import Socials from "../Socials/Socials"
import axios from 'axios'
const Contact = (props) =>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [result, setResult] = useState();

    async function postForm(data) {
      const response = await axios.post('/contactme',data);
      setResult(response.data.formEntry);
    }
    async function getResume() {
      const response = await axios.get('/resume',{responseType: `blob`});
      console.log(response.data);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      console.log(url)
      link.href = url;
      link.download = "Resume.pdf"
      link.target = "__blank"
      document.body.appendChild(link);
      link.click();
    }
    const onSubmit = async (data) => {
      console.log(data)
      postForm(data);
  }

    return (
      <div className="contact-page" id={props.id}>
        <div className='contact-container'>
          <div className='contact-left'>
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-content first">Looking to hire or work with me?</p>
            <p className="contact-content second">Feel free to drop me a line.</p>
            <p className="contact-content third">Want a look at my resume?</p>
            
            <a href="" target="_blank" rel="noopener noreferrer" download>
              <button className="resume-button" onClick={getResume}>
                Download Resume

              </button>
            </a>
            <p className="contact-content fourth">Visit my socials to stay up to date on me and my coding experiments.</p>
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
              {result}
              <button className="form-button"type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
        
    );
  }
  export default Contact;

  




