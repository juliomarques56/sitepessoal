import React from "react";

import './About.scss';

function About() {
    
    return(
        <div id="about" className="about__container">
            <div data-aos="fade-right">
                <h1 className="section__title--right" >Sobre mim</h1>
            </div>
            <div className="about__content">
                <h2>Olá!</h2>
                <p>Meu nome é Júlio Marques, casado, finalizando graduação em Análise e Desenvolvimento de Sistemas
                </p>
                <p>
                    Meu nome é Júlio Marques, casado, com graduação em Análise e Desenvolvimento de Sistemas
                    Atualmente estou trabalhando na Rapport Soluções como autônomo em modelo home office. Presto suporte aos clientes do sistema, além de configurar, testar e homologar funcionalidades novas e atuais, investigar, analisar e resolver problemas referente ao sistema.
                </p>
                <p>
                    Em paralelo venho estudando e praticando sobre teste de software e ter a oportunidade de ingressar na área teste.
                </p>
            </div>
        </div>
    )
}

export default About;
