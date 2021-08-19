import styled from "styled-components";
import {React, useRef, useEffect, useState} from "react";
import {gsap} from 'gsap';
import './Button.css'
function Button(props) {
    const Button = styled.button`
        color:white;
        font-weight:500;
        padding: 2vh 1.5vw;
        margin:0;
        border:none;
        cursor: pointer;
        background: #fc4a1a;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to left, #f7b733, #fc4a1a);  
        background: linear-gradient(to left, #f7b733, #fc4a1a); 
        z-index:2;
        display:flex;
        `;
    const Direction = props.direction;
    const arrowWidth = props.arrowWidth;
    const arrowHeight = props.arrowHeight;
    const [HandleHover, setHandleHover] = useState();
    var buttonRef = useRef();
    const tweenRef = useRef();
    const timeline = useRef(gsap.timeline({defaults: {ease:"power2.inOut"}}).pause());
    const tl = timeline.current;

    useEffect(() => {
        if(Direction == "right"){
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
    
    console.log(Direction);
    if(Direction =="right"){
    return (
        <div className="button-container"
        ref={element => {
            buttonRef = element;
        }}>
            <Button onMouseEnter={onHover} onMouseLeave={onLeave} className="button" onClick={toAbout}
            >
                
            <div className="content">
                <p>
                {props.children}
                </p>
                
            </div>
            
            </Button>   
            <svg className={`${Direction} arrow`} width="100%" height="100%" viewBox="0 0 38 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.021 6L29.667 8.59L31.5 10L38 5L31.5 0L29.667 1.41L33.021 4H12V6H33.021Z M0 4H12V6H0V4Z" fill="white"/>
            </svg>
        </div>
    )
    } else if (Direction =="left"){
        return (
            <div className="button-container"
            ref={element => {
                buttonRef = element;
            }}>
                <svg className={`${Direction} arrow`} width="100%" height="100%" viewBox="0 0 38 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.021 6L29.667 8.59L31.5 10L38 5L31.5 0L29.667 1.41L33.021 4H12V6H33.021Z M0 4H12V6H0V4Z" fill="white"/>
                </svg>
                <Button onMouseEnter={onHover} onMouseLeave={onLeave} className="button" onClick={toAbout}
                >
                    
                <div className="content">
                    <p>
                    {props.children}
                    </p>
                    
                </div>
                
                </Button>   
                
            </div>
        )
    } else {
        return (
            <div className="button-container"
            ref={element => {
                buttonRef = element;
            }}>
                <Button onMouseEnter={onHover} onMouseLeave={onLeave} className="button" onClick={toAbout}
                >
                    
                <div className="content">
                    <p>
                    {props.children}
                    </p>
                    
                </div>
                
                </Button>   
                
            </div>
        )
    }
}
function toAbout(){
    
}

export default Button;
