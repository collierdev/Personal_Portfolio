import './About.css';
import Skillbar from './Skillbar.js'
  function About(props) {
    return (
      <>
        <div className='about'>
            <div className='container-1'>
                <h1 className="header">Who am I?</h1>
                <p>I'm a 22 year old designer and coder living in Boston the area. <br></br> In my early years I began designing social media graphics and other branding materials, helping to form and market towards huge fanbases in the early online gaming scene.  This quickly led me down the path to web development and other coding endeavours. Since I have spent my time practicing and learning to improve my development skills.<br></br> With my time spent at the University of Vermont I've been able to gain a deeper understanding of genetics allowing me to combine these passions devloping skills in bioinformatics and data analysis.
                </p>
                <Skillbar />
            </div>
            
        </div>
        
      </>
    );
  }
  
  export default About;