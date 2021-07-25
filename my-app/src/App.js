import logo from './logo.svg';
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Navbar from './components/Navbar';
import Socials from "./components/Socials"
import Topography from "./components/Topography"
import './App.css';
import React, {useState, useCallback, useRef,useEffect} from 'react'
import gsap from 'gsap'
import Tilt from 'react-parallax-tilt'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() =>{
  },[])

  return (
    <div className="App">
      <Navbar state={{ isMenuOpen: [isMenuOpen, setIsMenuOpen] }}/>
        <div>
        <Tilt className="parallax-effect" 
              tiltReverse={true}
              perspective={1000}
              tiltAngleXInitial={0}
              tiltAngleYInitial={0}
              trackOnWindow={true}
              transitionSpeed={3000}
              reset={true}
              scale={1.04}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              gyroscope={true}
              >
                
                <div className="inner-elements">
                <Topography></Topography>
                  
                </div>
                
            </Tilt>
            <Socials></Socials>
                  <Hero></Hero>
                  <About></About>
      </div>
      <Work></Work>
      <Contact></Contact>
    </div>
  );
}


export default App;