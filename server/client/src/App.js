import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar';
import axios from 'axios'
import './App.css';
import React, {useState,useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Helmet from "react-helmet";

import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
function App() {

  let [menuState, setMenuState] = useState(false);
  const [test, setTest] = useState(null)
  const size = useWindowSize();
  const getData =() =>{
    axios.get('/testAPI')
    .then((response) => {
      console.log(response);
      const newData = response.data;
      setTest(newData);
    })
  }

  useEffect(() => getData(), []);
  
  
  return (
    <div className="App">
      <Navbar  menuState={menuState} setMenuState={setMenuState} />
      <Hero size={size} id="section-0">{test}</Hero>
      <Work id="section-1"></Work>
      <About id="section-2"></About>
      <Contact id="section-3"></Contact>
    </div>
  );
}
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}


export default App;