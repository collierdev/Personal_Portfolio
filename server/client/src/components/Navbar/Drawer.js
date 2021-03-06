import React,{useRef,useEffect} from 'react'
import gsap from 'gsap';
import Navlink from './Navlink'
import './Drawer.css'

function Drawer(props) {
  
    let drawerMenu = useRef(null);
    let drawerMenuOverlay = useRef(null);
    let drawerMenuLayer = useRef(null);
    const drawerMenuTimeline = useRef();
    const { menuState, setMenuState } = props;
  
    useEffect(() => {
      drawerMenuTimeline.current = gsap.timeline({ paused: true });
      drawerMenuTimeline.current.fromTo(
        [drawerMenuOverlay, drawerMenuLayer, drawerMenu],
        {
          duration: 0,
          x: '100%',
        },
        {
          duration: 0.75,
          x: '0%',
          ease: 'power3.inOut',
          stagger: {
            amount: 0.2
          }
        }
      );
    }, []);
  
    useEffect(() => {
      menuState ? drawerMenuTimeline.current.play() : drawerMenuTimeline.current.reverse();
    }, [menuState]);

  
    return(
        <>
        <div
        className="drawerNavigationOverlay"
        ref={el => (drawerMenuOverlay = el)}
        >
        </div>
        <div className="drawer">
            <div className="menu-layer" ref={el => (drawerMenuLayer = el)}></div>
            <nav className="drawerNavigation" ref={el => (drawerMenu = el)}>
            <ul className="drawer-list">
                <li className='drawer-item'>

                <Navlink
                    type="mobile"
                    to='/work'
                    target="#section-1"
                    className='drawer-links'
                    menuState={menuState} setMenuState={setMenuState}
                >
                    Work
                </Navlink>
                </li>
                <li className='drawer-item'>
                <Navlink 
                    type="mobile"
                    to='/about' 
                    target="#section-2"
                    className='drawer-links'
                    menuState={menuState} setMenuState={setMenuState}
                >
                    About
                </Navlink>
                
                </li>
                <li className='drawer-item'>
                <Navlink
                    type="mobile"
                    to='/contact'
                    target="#section-3"
                    className='drawer-links'
                    menuState={menuState} setMenuState={setMenuState}
                >
                    Contact
                </Navlink>
                </li>
            </ul>
            </nav>
        </div>
        </>
      );
}

export default Drawer
