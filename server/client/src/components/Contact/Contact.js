import './Contact.css';
import React, { useState,useEffect,useRef } from "react";
import {useForm} from 'react-hook-form'
import Socials from "../Socials/Socials"
import axios from 'axios'
import FileSaver from 'file-saver';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import gsap from 'gsap';
import {contactCardReveal, contactTitle} from '../Animantion/Animation'
import downloadArrow from '../images/download-arrow.svg'

const schema = yup.object().shape({
  name: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(40).required(),
  email: yup.string().email('Invalid Email Format').required('Required'),
  message: yup.string().matches(/^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s]+$/, 'Invalid entry').min(10).max(250).required(),
});
const Contact = (props) =>{

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
    });
    const [result, setResult] = useState();
    async function postForm(data) {
      const response = await axios.post('/contactme',data);
      setResult(response.data.formEntry);
    }
    async function getResume() {
      const response = await axios.get('/resume',{responseType: `blob`});
      const blob = new Blob([response.data], {type : "application/pdf"});
     FileSaver.saveAs(blob, "Resume.pdf");
    }






const b1 = `linear-gradient(180deg, rgba(254,176,42,1) 0%, rgba(243, 85, 50, 1) 100%)`;
const b2 = `linear-gradient(180deg, rgba(246, 154, 45, 1) 0%, rgba(239, 124, 59, 1) 100%)`;
const gradientRef = useRef();
const resumeTweenRef = useRef();
const resumeIconTweenRef = useRef();
const submitTweenRef = useRef();
let contactCardRef = useRef();
let contactTitleRef = useRef();
let contactTextRef = useRef();
let resumeTextRef = useRef();
let resumeButtonRef = useRef();
let resumeButtonImageRef = useRef();
let contactSocialTextRef = useRef();
let contactSocialsRef = useRef();
let submitButtonRef = useRef();
useEffect(() => {contactCardReveal(contactCardRef)}, [])

useEffect(() => {contactTitle(contactTitleRef, contactTextRef,resumeTextRef, resumeButtonRef,contactSocialTextRef)}, [])


useEffect(() => {
  const animation = gsap.fromTo(gradientRef.current, { background: b1}, {ease: "power6", duration: 3, background: b2, repeat: -1, yoyo: true});
  return () => {
    animation.kill();
  };
},[b1,b2]);
  useEffect(() => {
    resumeTweenRef.current = gsap.to(resumeButtonRef, {
            x:"1em",
            width:"+=10%",
            paused: true
        });
    resumeIconTweenRef.current =  gsap.fromTo(resumeButtonImageRef, { display:"none", opacity:0, y:"-=0.25em"}, {ease: "none", stagger:0.3,duration: 0.5, display:"block",opacity:1, y:"0em", paused: true,});
    submitTweenRef.current = gsap.to(submitButtonRef, {
          x: 20,
          paused: true
      });
  })

const resumeOnHover = () =>{
  resumeTweenRef.current.play();
  resumeIconTweenRef.current.play();
} 
const resumeOnLeave =() =>{
  resumeTweenRef.current.reverse();
  resumeIconTweenRef.current.reverse();
}

const submitOnHover = () =>{
  submitTweenRef.current.play();
} 
const submitOnLeave =() =>{
  submitTweenRef.current.reverse();
}
const onSubmitHandler = (data) => {
  postForm(data);
  reset();
};

    return (
      <div className="contact-page" ref={gradientRef} id={props.id}>
        <div className='contact-container'ref={elem => {contactCardRef = elem; }}>
          <div className='contact-left' >
            <h1 className="contact-title" ref={elem => {contactTitleRef = elem; }}>Contact Me</h1>
            <div ref={elem => {contactTextRef = elem; }}>
              <p className="contact-content first">Looking to hire or work with me?</p>
              <p className="contact-content second">Feel free to drop me a line.</p>
            </div>
            <p className="contact-content third" ref={elem => {resumeTextRef = elem; }}>Want a look at my resume?</p>          
            <button className="resume-button" onMouseEnter={resumeOnHover} onMouseLeave={resumeOnLeave} ref={elem => {resumeButtonRef = elem; }} onClick={getResume}>
              Download Resume
              <img src={downloadArrow} ref={elem => {resumeButtonImageRef = elem; }} alt="download-arrow"></img>
            </button>
            <p className="contact-content fourth" ref={elem => {contactSocialTextRef = elem; }} >Visit my socials to stay up to date on me and my coding experiments.</p>
            <Socials ref={contactSocialsRef} color="#4A4A4A" container="contact"></Socials>
          </div>
          <div className='contact-right'>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div>
                <label htmlFor="name" >Name *</label>
                <input {...register("name")} placeholder="Name" type="text" id="name" required />
                <p>{errors.name?.message}</p>
              </div>
              <div>
                <label htmlFor="email" >Email *</label>
                <input {...register("email")} placeholder="Email" type="email" id="email" required />
                <p>{errors.email?.message}</p>
              </div>
              <div>
                <label htmlFor="message">Message *</label>
                <textarea {...register("message") }placeholder="Your message here" id="message" required />
                <p>{errors.message?.message}</p>
              </div>
              
              <button className="form-button" type="submit" onMouseEnter={submitOnHover} onMouseLeave={submitOnLeave} ref={elem => {submitButtonRef = elem; }}>
                Submit 
              </button>
              <p>{result}</p>
            </form>
          </div>
        </div>
      </div>
        
    );
  }
  export default Contact;

  




