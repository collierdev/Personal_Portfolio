import React from 'react'
import Skill from './Skill'
import './Skillbar.css'
import Images from '../images/Images.js'
function SkillCardList(props) {
    const listIcons = Images.map((image,index) =>(
        <li className="SkillContainer" key={index}>
            <Skill desc={image.description} src={image.src} id={image.id} />
        </li>
    ));

    return(
        <ul className="Skills-container">{listIcons}</ul>
    )
}


function Skillbar() {

    return (
        <div className="Skillbar">
            <SkillCardList></SkillCardList>
        </div>
    )
}

export default Skillbar
