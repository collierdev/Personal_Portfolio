import React from 'react'


function Skill(props) {
    const listItems = props.desc.map((item,index) =>(
        <li className="SkillList" key={index}>
            <p>{item}</p>
        </li>
    ));
    function SkillItemList() {
        return(
            <ul className="Skill-Item-container">{listItems}</ul>
        )
    }

    return (
        <div className="Skill" id={props.id}>
            <img className="SkillIcon" src={props.src} />
            <div className="SkillBar"></div>
            <SkillItemList />
        </div>
    )
}

export default Skill
