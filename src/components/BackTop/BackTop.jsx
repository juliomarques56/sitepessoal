import React, {useEffect, useState} from 'react';
import {Link} from 'react-scroll';
import orientacao from '../../assets/img/orientacao.svg';
import './BackTop.scss';


function BackTop() {
    const [isShow, setIsShow] = useState(false);

    const handleScroll =() => {
        
        if (document.documentElement.scrollTop > 0) {
            setIsShow(true)
            console.log(document.documentElement.scrollTop)
            console.log(isShow)
        }else {
            setIsShow(false);
        }
        
    }


    useEffect(() => {
        window.onscroll = () => handleScroll()
    
        return ;
    }, [])
    
   
    return(
        <Link to="root" className={"backtop " + (isShow === true ? "backtop--visibility":'')} smooth={true} duration={1000}>
            <img src={orientacao} alt="Botton back top"></img>
        </Link>
      
    )
}

export default BackTop;