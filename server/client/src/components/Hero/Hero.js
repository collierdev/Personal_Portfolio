import './Hero.css';
import Button from "../Button/Button"
import Socials from "../Socials/Socials"
import Navlink from "../Navbar/Navlink"
import Topography from "../Topography/Topography"
import { useEffect, useRef } from 'react';
import { heroTextReveal, heroSocialReveal} from '../Animantion/Animation'
import Tilt from 'react-parallax-tilt'

function Hero(props) {
  let titleRef = useRef();
  let subtitleRef = useRef();
  let buttonRef = useRef();
  const viewportWidth = props.size.width;
  let socialRef = useRef();
  
  useEffect(() => {
    heroTextReveal(titleRef,subtitleRef);
  },[titleRef,subtitleRef]);
  useEffect(() => {
    heroSocialReveal(socialRef);
  },[socialRef]);
    return (
      <>
        
        <div className='hero-container' id={props.id}>
          <div className="topo-container">
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
      </div>
          <div className="hero-left" >
            <div className="hero-content">
              <h1 className="name" ref={elem => {titleRef = elem; }} >Joshua Collier</h1>
              <h2 className="emphasis" ref={elem => {subtitleRef = elem; }} >Bioinformatician & Full-Stack Developer</h2>
              
              <Button ref={buttonRef} direction="right">
                <Navlink to='/' target="#section-2" class="about-button">
                  About Me
                </Navlink>
              </Button>
            </div>
          </div>

          <div className="hero-right">
          <Socials ref={elem => {socialRef = elem; }} viewWidth={viewportWidth}></Socials>
          </div>
        </div>
        
      </>
    );
  }
  
  export default Hero;