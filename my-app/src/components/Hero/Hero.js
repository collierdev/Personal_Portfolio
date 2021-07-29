import './Hero.css';
import Button from "../Button/Button"
import Socials from "../Socials/Socials"

function Hero(props) {
    return (
      <>
        <div className='hero-container'>
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