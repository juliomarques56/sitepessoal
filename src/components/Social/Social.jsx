import React from "react";

import './Social.scss';

function Social() {
    
    return(
        <section className="social__container">
            <div className="social__link">
                <div className="top__line"></div>
                <a href="https://github.com/juliomarques56"  target="__blank" title="Github" className="github"><i className="fab fa-github" aria-hidden="true"></i></a>
                <a href="https://www.facebook.com/jota56"  target="__blank" title="Facebook" className="facebook"><i className="fab fa-facebook" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/julio-marques-2772a6b2/"  target="__blank" title="Linkedin" className="linkedin "><i className="fab fa-linkedin-in" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/julio_marques56/?hl=pt-br"  target="__blank" title="Instagram" className="instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                <div className="botton__line"></div>
            </div> 
      </section> 
    )
}

export default Social;
