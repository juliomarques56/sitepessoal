import React, {useState} from 'react';
import {Link} from 'react-scroll';
import './Navbar.scss';

function Navbar() {
    const [isSelected, setIsSelected] = useState(false);
    
    const handleClick =() => {
        setIsSelected(!isSelected);
      }

    return(
        <header>
            <nav>
                <div className={"menu " + ( isSelected ? "active":'')}>
                    <Link className="menu__link" to="home" smooth={true} duration={1000} onClick={handleClick}>Home</Link>
                    <Link className="menu__link" to="about" smooth={true} duration={1000} onClick={handleClick}>Sobre Mim</Link>
                    <Link className="menu__link" to="skill" smooth={true} duration={1000} onClick={handleClick}>Habilidades</Link>
                    <Link className="menu__link" to="project" smooth={true} duration={1000} onClick={handleClick}>Projetos</Link>
                    <Link className="menu__link" to="contact" smooth={true} duration={1000} onClick={handleClick}>Contato</Link>
                </div>
                <div className={"menu__toggler " + ( isSelected ? "active":'')} onClick={handleClick}><span></span></div>
            </nav>
        </header>
    )
}

export default Navbar;
