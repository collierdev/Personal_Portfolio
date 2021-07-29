import React from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import { Link } from 'wouter';
function Header(props) {
    const { menuState, setMenuState } = props;
    
    function handleClick(){
        setMenuState(!menuState);
        console.log(props);
    }

    return(
    <nav className='navbar'>    
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          COLLIER DEV
        </Link>
        <div className='burger'>
        <Hamburger className={`menu-trigger ${menuState ? 'menu-close' : ''}`} onToggle={handleClick} size={25} color="#F3742A" position="absolute"/>
        </div>
      </div>
    </nav>
    );
}

export default Header
