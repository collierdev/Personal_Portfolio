import './About.css';
import Skillbar from '../Skillbar/Skillbar.js'
import Portrait from '../images/portrait.jpg'

  function About(props) {
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
                <h1 className="title">About Me</h1>
              </div>  

            <div className="about-content">
              <div className="portrait">
                <img src={Portrait} alt="Portrait"></img>
              </div>
              <article>
                <p>Hi, I’m Joshua Collier a 22 year old designer and coder living in Boston, MA.</p>
                <p>In my early years I began learning design through social media graphics and other branding materials, helping to form and market towards huge fanbases for organizations in the early Esports scene.</p>
                <p>Design quickly turned into web development and other coding endeavours which led me to the University of Vermont to study <em>bioinformatics</em> and <em>genetics</em>.</p>
                <p>I spend my time now creating full-stack applications with an eye for <em>interactive frontend</em>, and continuing to improve my anaylsis of readily available genomic data.</p>
              </article>
            </div>
                
            <Skillbar />

          </div>
        </div>
      </>
    );
  }
  
  export default About;