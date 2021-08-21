import React from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import Navlink from './Navlink';
function Header(props) {
    const { menuState, setMenuState } = props;
    
    function handleClick(){
        setMenuState(!menuState);
        console.log(props);
    }

    return(
    <nav className='navbar'>    
      <div className='navbar-container'>
        <Navlink menuState={menuState} setMenuState={setMenuState}  to='/'  target="#section-0" class="logo">
          COLLIER DEV
        </Navlink>
        <div className='burger'>
        <Hamburger className={`menu-trigger`} toggled={menuState} toggle={setMenuState} size="30" color="#F3742A" position="absolute"/>
        </div>
      </div>
    </nav>
    );
}

export default Header
