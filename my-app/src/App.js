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

import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
function App() {

  let [menuState, setMenuState] = useState(false);
  const [test, setTest] = useState(null)

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
      <Hero id="section-0">{test}</Hero>
      <Work id="section-1"></Work>
      <About id="section-2"></About>
      <Contact id="section-3"></Contact>
    </div>
  );
}


export default App;