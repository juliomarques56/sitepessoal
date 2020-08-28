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
                        <span className="span">Júlio Marques</span>
                    </h1>
                    <p>Desenvolvedor de teste / Desenvolvedor Fron-end</p>
                    <Link to="contact" className="btn-pattern" smooth={true} duration={1000}>contate me</Link>
                    <a href="../../assets/curriculo/julio-curriculo.pdf" download target="_blank" className="btn-pattern" duration={1000}>Curriculo</a>
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
