import './Hero.css';
import Button from "../Button/Button"

function Hero(props) {
    return (
      <>
        <div className={'hero'}>
          
          <h1 className="name">Joshua Collier</h1>
          <h2 className="emphasis">Bioinformatician & Full-Stack Developer</h2>
          <Button arrowWidth="70" direction="right">About Me</Button>

        </div>
        
      </>
    );
  }
  
  export default Hero;