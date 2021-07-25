  
import React, { useState,} from 'react';
import { Link } from 'wouter';
import './Navbar.css';
import { Divide as Hamburger } from 'hamburger-react'

function Navbar(props) {
  const closeMenu = () => setIsMenuOpen(false);
  const {
    isMenuOpen: [isMenuOpen, setIsMenuOpen]
  } = {
    isMenuOpen: useState(false),
    ...(props.state || {})
  };
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMenu}>
            COLLIER DEV
          </Link>
          <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/work'
                className='nav-links'
                onClick={closeMenu}
              >
                Work
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/experiments'
                className='nav-links'
                onClick={closeMenu}
              >
                Experiments
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className='burger'>
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={25} color="#F3742A" position="absolute"/>
          </div>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;