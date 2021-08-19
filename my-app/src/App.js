import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar';

import './App.css';
import React, {useState, useCallback, useRef,useEffect} from 'react'
import gsap from 'gsap'

import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

function App() {
  let [menuState, setMenuState] = useState(false);
  useEffect(() =>{
  },[])

  return (
    <div className="App">
      <Navbar menuState={menuState} setMenuState={setMenuState} />

      <Hero id="section-0"></Hero>
      <Work id="section-1"></Work>
      <About id="section-2"></About>
      <Contact id="section-3"></Contact>
    </div>
  );
}


export default App;