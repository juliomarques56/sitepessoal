import React from "react";
import {Link} from 'react-scroll';
import './Home.scss';

import imgCodeHome from '../../assets/img/noun_code_2086374.svg';
import imgArrow from '../../assets/img/arrow.svg';

function Home() {
    

    return(
        <div id="home" className="home">
            <div className="home__container">
                <div className="home__text" data-aos="fade-right">
                    <h1>
                        <span>Olá!</span>
                        <br/>
                        <span className="span">Meu nome é Júlio</span>
                        <span className="span p">Dev Front-end</span>
                    </h1>
                    <p>CSS / JavaScript / React</p>
                    <Link to="contact" className="btn-pattern" smooth={true} duration={1000}>contate me</Link>
                </div>
                <img className="img__home" src={imgCodeHome}  alt="Imagem home" data-aos="fade-left"></img>
            </div>
            <div className="arrow " >
                    <img src={imgArrow} alt="Arrow"></img>
            </div>
        </div>
       
    )
}

export default Home;
