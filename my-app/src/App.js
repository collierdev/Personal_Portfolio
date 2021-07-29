import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar';
import * as THREE from "three";
import Topography from "./components/Topography/Topography"
import './App.css';
import React, {useState, useCallback, useRef,useEffect} from 'react'
import gsap from 'gsap'
import Tilt from 'react-parallax-tilt'

function App() {
  let [menuState, setMenuState] = useState(false);
  useEffect(() =>{
  },[])

  return (
    <div className="App">
      <Navbar menuState={menuState} setMenuState={setMenuState} />
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
            
                  <Hero></Hero>
                  <About></About>
      </div>
      <Work></Work>
      <Contact></Contact>
    </div>
  );
}


export default App;