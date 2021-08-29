  
import React, {useRef, useEffect} from 'react';
import { gsap } from "gsap";
import { Divide as Hamburger } from 'hamburger-react'
import {Link} from 'wouter'
import './Navbar.css';
import Drawer from './Drawer';
import Navlink from './Navlink'
const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
}


function DrawerNav(props){
  const { menuState, setMenuState } = props;
  return(
    <>
        <Navlink menuState={menuState} setMenuState={setMenuState}  to='/'  target="#section-0" class="logo">
          COLLIER DEV
        </Navlink>
        <div className='burger'>
        <Hamburger className={`menu-trigger`} toggled={menuState} toggle={setMenuState} size="30" color="#F3742A" position="absolute"/>
        </div>
    </>
  );
};

function DesktopNav(props) {
return(
  <>
    <Navlink  to='/'  target="#section-0" class="logo">
      COLLIER DEV
    </Navlink>
    <ul className={'nav-menu'}>
      <li className='nav-item'>
        <Navlink to='/about' target="#section-2" class="nav-links">
          About
        </Navlink>
      </li>
      <li className='nav-item'>
        <Navlink target="#section-1" to='/work' class="nav-links">
          Work
        </Navlink>
      </li>
      <li className='nav-item'>
        <Link to='/experiments' className='nav-links' class="nav-links">
          Experiments
        </Link>
      </li>

      <li className='nav-item'>
        <Navlink target="#section-3" to='/contact' class="nav-links">
          Contact
        </Navlink>
      </li>
    </ul>
  </>
);
};

function Navigation(props) {
  const { width } = useViewport();
  const breakpoint = 960;
  const navRef= useRef();
  useEffect(() => {
    const animation = gsap.to(navRef.current, {
          
      y:-120,
      paused: true,
      duration: 0.2,
      
    });
    const animation2 = gsap.to(navRef.current, {
      scrollTrigger: {
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          self.direction === 1 ? animation.play() : animation.reverse();
        },
      },
    });
    return () => {
      animation.kill();
      animation2.scrollTrigger.kill();
    };
  },[])

  return(
    <>
    <nav className='navbar'>  
      <div className='navbar-container' ref={navRef}>
        {width < breakpoint ? <DrawerNav {...props}></DrawerNav> : <DesktopNav/>}
      </div>
    </nav>
    {width < breakpoint ? <Drawer {...props}/> : ''}
    </>
  ) ;
};

function Navbar(props) {

  return (
      <Navigation {...props}/>
  );
}

export default Navbar;