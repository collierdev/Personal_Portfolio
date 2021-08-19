import './Hero.css';
import Button from "../Button/Button"
import Socials from "../Socials/Socials"

import Topography from "../Topography/Topography"
import Tilt from 'react-parallax-tilt'
function Hero(props) {
    return (
      <>
              <Tilt className="parallax-effect" 
            tiltReverse={true}
            perspective={1700}
            tiltAngleXInitial={0}
            tiltAngleYInitial={0}
            trackOnWindow={true}
            transitionSpeed={1000}
            reset={true}
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            gyroscope={true}
        >
          <div className="inner-elements">
            <Topography></Topography>
          </div>    
      </Tilt>
        <div className='hero-container' id={props.id}>
          
          <div className="hero-left" >
            <div className="hero-content">
              <h1 className="name">Joshua Collier</h1>
              <h2 className="emphasis">Bioinformatician & Full-Stack Developer</h2>
              <Button direction="right">About Me</Button>
            </div>
          </div>
          <div className="hero-right">
            <Socials></Socials>
          </div>
        </div>
        
      </>
    );
  }
  
  export default Hero;