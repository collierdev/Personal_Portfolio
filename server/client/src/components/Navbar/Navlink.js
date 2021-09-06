import React, {useRef,useEffect} from 'react'
import gsap from "gsap"
import './Drawer.css'
import { Link } from 'wouter';
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
function Navlink(props) {

  
  if(props.type === "mobile"){
    return (
        <>
            <Mobile {...props}></Mobile>
        </>
    );
  } else {
    return(
      <>
        <Desktop {...props}></Desktop>      
      </>
    );
  }
}

export default Navlink
function Desktop(props){
  const { menuState, setMenuState } = props;
    
  const handleClick = (e) => {
    if(menuState){
      setMenuState(false);
    }
    console.log(props);
      console.log(e);
      e.stopPropagation();
      gsap.to(window, {
        duration: 0.7,
        scrollTo: {
          y: `${props.target}`,
          offsetY: 0
        }
      });
    };

  return(
    <>
      <Link
        to={props.to}
        className={props.type}
        onClick={handleClick}
      >
        {props.children}
      </Link>
    </>
  )
}

function Mobile(props){
  const { menuState, setMenuState } = props;
  const handleClick = (e) => {
    if(menuState){
      setMenuState(false);
    }
    console.log(props);
      console.log(e)
      e.stopPropagation();
      gsap.to(window, {
        duration: 0.7,
        scrollTo: {
          y: `${props.target}`,
          offsetY: 0
        }
      });
    };
  let tweenRef = useRef();
  let barRef = useRef();
  useEffect(() => {
    tweenRef.current = gsap.fromTo(barRef,{ scaleX: 0, transformOrigin: "right" }, {scaleX: 1, transformOrigin: "left", paused: true});
  })
  const onHover = () =>{
    tweenRef.current.play();
    console.log(tweenRef);
  } 
  const onLeave =() =>{
    tweenRef.current.reverse();
  }
  return (
    <>
      <div className="drawer-link-container" onMouseEnter={onHover} onMouseLeave={onLeave}>
        <Link
         to={props.to}
         className={props.type}
         onClick={handleClick}
        >
            {props.children}
        </Link>
        <div ref={el => (barRef = el)} className="drawer-bar"></div>
      </div>
    </>
)
}