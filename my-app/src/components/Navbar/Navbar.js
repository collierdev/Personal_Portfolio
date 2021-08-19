  
import React, { useState,} from 'react';
import { gsap } from "gsap/dist/gsap";
import {Link} from 'wouter'
import './Navbar.css';
import Header from './Header';
import Drawer from './Drawer';
import Navlink from './Navlink'

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};
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
 
  const { menuState, setMenuState } = props
  return(
    <>
    <Header menuState={menuState} setMenuState={setMenuState} />
    <Drawer menuState={menuState} setMenuState={setMenuState}/>
    </>
  );
};

function DesktopNav(props) {

return(
<nav className='navbar'>  
  <div className='navbar-container'>
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
  </div>
</nav>
);
};

function Navigation(props) {
  const { width } = useViewport();
  const breakpoint = 960;
  return width < breakpoint ? <DrawerNav {...props}></DrawerNav> : <DesktopNav/>;
};

function Navbar(props) {
  return (
    <ViewportProvider>
      <Navigation {...props}/>
    </ViewportProvider>
  );
}

export default Navbar;