import React, {useEffect,useRef} from 'react';
import './Skillbar.css';
import Images, { AnalysisSVG, DesignSVG, DevelopmentSVG } from '../images/Images.js';
import {skillCardContentReveal} from '../Animantion/Animation';

function SkillCard(props) {
    let cardRef = useRef();
    let iconRef = useRef();
    let titleRef = useRef();
    let barRef = useRef();
    let listRef = useRef();

    useEffect(() => {
        skillCardContentReveal(cardRef,iconRef,titleRef,barRef,listRef);
    }, [])
    let Svg = null
    if(props.id === "Design"){
         Svg = DesignSVG;
    } else if(props.id === "Development") {
         Svg = DevelopmentSVG;
    } else {
        Svg = AnalysisSVG;
    }
        
        return(
            <li className="SkillContainer" ref={elem => {cardRef = elem; }}>
                <div className="Skill" id={props.id}>
                    <Svg/>
                   {/* <img className="SkillIcon" ref={elem => {iconRef = elem; }} src={props.src} alt="skill"/> */}
                    <h3 ref={elem => {titleRef = elem; }}>{props.id}</h3>
                    <div className="SkillBar" ref={elem => {barRef = elem; }}></div>
                    <ul className="Skill-Item-container" ref={elem => {listRef = elem; }}>
                        {props.description.map((content,index) => {
                            return (
                                <li  key={index} className="SkillList" >
                                    <p>{content}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </li>
        )
                    
}

function Skillbar() {

    return (
        <div className="Skillbar Skills-container">
            {Images.map((image) => 
                <SkillCard key={image.id} id={image.id} src={image.src} description={image.description} name={image.name}></SkillCard>
            )}
        </div>
    )
}

export default Skillbar
