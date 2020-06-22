import React from "react";
import imgContact from '../../assets/img/contact.svg';
import Social from '../Social';
import './Contact.scss';

function Contact() {
    
    return(
        <div id="contact" className="contact__container">
            <div data-aos="fade-left">
                <h1 className="section__title--left">Contato</h1>
            </div>
            <section className="contact__content">
                <div className="link__contact">
                    <a className="link__contact--email" href="maito:jotamarques56@gmail.com">jotamarques56@gmail.com</a>
                    <a className="btn-pattern" href="https://api.whatsapp.com/send?phone=5592991714126">Whatsapp</a>
                    <Social/>
                </div>
                <div>
                    <img className="img__contact" src={imgContact} alt="Imagem contact"></img>
                </div>
            </section>
        </div>
    )
}

export default Contact;
