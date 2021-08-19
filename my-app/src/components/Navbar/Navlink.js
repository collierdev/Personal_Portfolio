import React from 'react'
import gsap from "gsap"
import { Link } from 'wouter';
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
function Navlink(props) {
    const handleClick = (e) => {
    
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
    

    return (
        <>
            <Link
             to={props.to}
             className={props.class}
             onClick={handleClick}
            >
                {props.children}
            </Link>
        </>
    )
}

export default Navlink
