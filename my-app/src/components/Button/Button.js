import {React, useRef, useEffect,} from "react";
import {gsap} from 'gsap';
import './Button.css'
function Button(props) {
    const Direction = props.direction;
    let buttonRef = useRef();
    const tweenRef = useRef();

    useEffect(() => {
        if(Direction === "right"){
            tweenRef.current = gsap.to(buttonRef, {
                x: 20,
                paused: true
            });
        }
        else{
            tweenRef.current = gsap.to(buttonRef, {
                x: -20,
                paused: true
            });
        }
      })
    const onHover = () =>{
        tweenRef.current.play();
    } 
    const onLeave =() =>{
        tweenRef.current.reverse();
    }
    
    if(Direction ==="right"){
    return (
        <div className="button-container"
        ref={element => {
            buttonRef = element;
        }}>
            <button onMouseEnter={onHover} onMouseLeave={onLeave} className="button" onClick={toAbout}
            >
                {props.children}
            </button>   
            <svg className={`${Direction} arrow`} width="100%" height="100%" viewBox="0 0 38 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.021 6L29.667 8.59L31.5 10L38 5L31.5 0L29.667 1.41L33.021 4H12V6H33.021Z M0 4H12V6H0V4Z" fill="white"/>
            </svg>
        </div>
    )
    } else if (Direction ==="left"){
        return (
            <div className="button-container"
            ref={element => {
                buttonRef = element;
            }}>
                <svg className={`${Direction} arrow`} width="100%" height="100%" viewBox="0 0 38 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.021 6L29.667 8.59L31.5 10L38 5L31.5 0L29.667 1.41L33.021 4H12V6H33.021Z M0 4H12V6H0V4Z" fill="white"/>
                </svg>
                <button onMouseEnter={onHover} onMouseLeave={onLeave} className="button" onClick={toAbout}
                >
                    {props.children}
                </button>  
            </div>
        )
    } else {
        return (
            <div className="button-container"
            ref={element => {
                buttonRef = element;
            }}>
                <svg className={`${Direction} arrow`} width="100%" height="100%" viewBox="0 0 38 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.021 6L29.667 8.59L31.5 10L38 5L31.5 0L29.667 1.41L33.021 4H12V6H33.021Z M0 4H12V6H0V4Z" fill="white"/>
                </svg>
                <button onMouseEnter={onHover} onMouseLeave={onLeave} className="button" onClick={toAbout}
                >
                    {props.children}
                </button>   
                
            </div>
        )
    }
}
function toAbout(){
    
}

export default Button;
