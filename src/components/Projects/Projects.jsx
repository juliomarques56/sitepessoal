import React, {useEffect, useState} from 'react';

import './Projects.scss';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("https://5ee78bcfffee0c0016a1244a.mockapi.io/api/v1/projetos")
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, [])

    return(
        <div id="project" className="project__container">
            <div data-aos="fade-right">
                <h1 className="section__title--right">Projetos</h1>
            </div>
            <div className="project__section">
                <section className="card-deck ">
                    {projects.map(project =>
                        <div className="card text-center">
                            <img className="card-img-top" src={project.image} alt="Mitros Tecnologia"></img>
                            <div className="card-body">
                                <h5 className="card-title">{project.name}</h5>
                                <p className="card-text">{project.description}</p>
                                <p className="card-text"><small className="text-footer">{project.stack}</small></p>
                            </div>
                            <div className="card__link">
                                <h3>Repositório</h3>
                                <a href={project.repository} target="__blank" class="btn__pattern"><i class="fab fa-github" aria-hidden="true"></i>Acessar</a>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </div>
    )
}

export default Projects;
