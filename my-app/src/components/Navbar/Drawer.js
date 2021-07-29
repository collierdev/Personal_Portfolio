import React,{useRef,useEffect} from 'react'
import { Link } from 'wouter';
import gsap from 'gsap';
import './Drawer.css'

function Drawer(props) {
    let drawerMenu = useRef(null);
    let drawerMenuOverlay = useRef(null);
    let drawerMenuLayer = useRef(null);
    const drawerMenuTimeline = useRef();
    console.log(props);
    const { menuState, setMenuState } = props;
  
    useEffect(() => {
      drawerMenuTimeline.current = gsap.timeline({ paused: true });
      drawerMenuTimeline.current.fromTo(
        [drawerMenuOverlay, drawerMenuLayer, drawerMenu],
        {
          duration: 0,
          x: '100%'
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
        onClick={() => setMenuState(false)}
        >
        </div>
        <div className="drawer">
            <div className="menu-layer" ref={el => (drawerMenuLayer = el)}></div>
            <nav className="drawerNavigation" ref={el => (drawerMenu = el)}>
            <ul className="drawer-list">
                <li className='drawer-item'>
                <Link 
                    to='/about' 
                    className='drawer-links'
                >
                    About
                </Link>
                </li>
                <li className='drawer-item'>
                <Link
                    to='/work'
                    className='drawer-links'
                >
                    Work
                </Link>
                </li>
                <li className='drawer-item'>
                <Link
                    to='/experiments'
                    className='drawer-links'
                >
                    Experiments
                </Link>
                </li>
    
                <li className='drawer-item'>
                <Link
                    to='/contact'
                    className='drawer-links'
                >
                    Contact
                </Link>
                </li>
            </ul>
            </nav>
        </div>
        </>
      );
}

export default Drawer
