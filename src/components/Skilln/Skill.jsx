import React from "react";

import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaReact, FaDatabase, FaGit, FaGithub, FaCheck, FaPhp, FaPython } from "react-icons/fa";
import './Skill.scss';

function Skill() {
    
    return(
        <div id="skill" classNameName="skill__container">
            <div data-aos="fade-left">
                <h1 className="section__title--left" >Skills</h1>
            </div>
            <div className="skill__section">
                <div className="tag">
                    <div className="skill__tag--dev">
                        <h2 className="tag__title" data-aos="fade-right">Hard Skills (Front-end)</h2>
                        <div className="icons m-left" data-aos="fade-left">
                            <FaHtml5 title="HTML5" className="fa-icon"/>
                            <FaCss3Alt title="CSS3" className="fa-icon"/>
                            <FaJsSquare title="JavaScript" className="fa-icon"/>
                            <FaReact title="React" className="fa-icon"/>
                            <FaBootstrap title="Bootstrap" className="fa-icon"/>
                            <FaPhp title="PHP" className="fa-icon"/>
                            <FaPython title="Python" className="fa-icon"/>
                            <FaDatabase title="Banco de dados" className="fa-icon"/>
                            <FaGit title="Git" className="fa-icon"/>
                            <FaGithub title="Github" className="fa-icon"/>
                        </div>
                    </div>
                    <div className="skill__tag--test">
                        <h2 className="tag__title" data-aos="fade-right">Hard Skills (Teste de Software)</h2>
                        <ul className="tag-ul m-left" data-aos="fade-left">
                            <li><FaCheck className="fa__icon--check "/> Teste funcional (Manual e automatizado)</li>
                            <li><FaCheck className="fa__icon--check "/> Teste não-funcional API/WEB (Performace, acessibilidade e estresse)</li>
                            <li><FaCheck className="fa__icon--check "/> Teste exploratório</li>
                            <li><FaCheck className="fa__icon--check "/> DBB</li>
                            <li><FaCheck className="fa__icon--check "/> Selenium Webdriver</li>
                            <li><FaCheck className="fa__icon--check "/> Postman</li>
                            <li><FaCheck className="fa__icon--check "/> JMeter</li>
                            <li><FaCheck className="fa__icon--check "/> Mantis</li>
                            <li><FaCheck className="fa__icon--check "/> Automação de API Rest</li>
                            <li><FaCheck className="fa__icon--check "/> Reporte de inconsistência</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;
