  
import React, { useState,} from 'react';
import { Link } from 'wouter';
import './Navbar.css';
import Header from './Header'
import Drawer from './Drawer'
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
    <Link to='/' className='navbar-logo'>
      COLLIER DEV
    </Link>
    <ul className={'nav-menu'}>
      <li className='nav-item'>
        <Link to='/about' className='nav-links'>
          About
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/work'
          className='nav-links'
        >
          Work
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/experiments'
          className='nav-links'
        >
          Experiments
        </Link>
      </li>

      <li className='nav-item'>
        <Link
          to='/contact'
          className='nav-links'
        >
          Contact
        </Link>
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