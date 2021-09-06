import { useRef,useEffect } from 'react';
import {aboutTitleReveal, headshotReveal, aboutArticleReveal} from '../Animantion/Animation';
import './About.css';
import Skillbar from '../Skillbar/Skillbar.js';
import Portrait from '../images/portrait.jpg';


  function About(props) {
    let titleRef = useRef();
    let headshotRef = useRef();
    let articleRef = useRef();
    useEffect(() => {
      aboutTitleReveal(titleRef);
    },[]);
    useEffect(() => {
      headshotReveal(headshotRef);
    },[]);
    useEffect(() => {
      aboutArticleReveal(articleRef);
    },[]);
    return (
      <>
        <div className='about' id={props.id}>
          <div className="background-text">
            <h1 className="design">Design</h1>
            <h1 className="develop">Develop</h1>
            <h1 className="analyze">Analyze</h1>
          </div>
          <div className='container-1'>
            <div className="about-header">
                <h1 className="title" ref={elem => {titleRef = elem; }}>About Me</h1>
              </div>  

            <div className="about-content">
              <div className="portrait">
                <img src={Portrait} alt="Portrait" ref={elem => {headshotRef = elem; }}></img>
              </div>
              <article ref={elem => {articleRef = elem; }}>
                <p>Hi, I’m Joshua Collier a 22 year old designer and coder living in Boston, MA.</p>
                <p>In my early years I began learning design through social media branding materials, helping to form and market towards huge fanbases for organizations in the early Esports scene.</p>
                <p>Design quickly turned into web development and other coding endeavours which led me to the University of Vermont to study <em>bioinformatics</em> and <em>genetics</em>.</p>
                <p>I spend my time now creating full-stack applications with an eye for <em>interactive frontend</em>, and continuing to improve my anaylsis skills with genomes.</p>
              </article>
            </div>
                
            <Skillbar />

          </div>
        </div>
      </>
    );
  }
  
  export default About;