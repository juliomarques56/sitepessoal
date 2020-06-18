import React from "react";

import imgSkill from '../../assets/img/skills.svg';
import './Skill.scss';

function Skill() {
    
    return(
        <div id="skill" classNameName="skill__container">
            <div data-aos="fade-left">
                <h1 className="section__title--left" >Skills</h1>
            </div>
            <div className="skill__section">
                <div className="skill__tag">
                    <img className="img__skills" src={imgSkill} alt=" Imagem Skill"></img>
                </div>
                <div className="skill__tag">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>PHP</span>
                </div>
                <div className="skill__tag">
                    <span>Python</span>
                    <span>bootstrap</span>
                    <span>Git</span>
                    <span>MySQL</span>
                </div>
                <div className="skill__tag">
                    <span>PostgreSQL</span>
                    <span>SQLServer</span>
                    <span>FireBird</span>
                    <span>Scrum</span>
                </div>
            
            </div>
        </div>
    )
}

export default Skill;
