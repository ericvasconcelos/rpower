'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Title from './title';

const Projects = React.createClass({
  render() {
    return (
      <section id="projects" className="section projects">
      	<div className="container">
          
          <Title name="Projetos"/>

          <div className="row">
            <div className="col-3">
              <ProjectsItem img="assets/images/projeto-um.jpg" title="Projeto Um" description="Projeto de aterramento e SPDA e Projeto de iluminação" />
            </div>
            <div className="col-3">
              <ProjectsItem img="assets/images/projeto-dois.jpg" title="Projeto Dois" description="Projeto de aterramento e SPDA e Baixa e média tensão " />
            </div>
            <div className="col-3">
              <ProjectsItem img="assets/images/projeto-tres.jpg" title="Projeto Três" description="Diagramas de malhas, funcionais e de interligação" />
            </div>
            <div className="col-3">
              <ProjectsItem img="assets/images/projeto-quatro.jpg" title="Projeto Quatro" description="Redes de telecomunicações para voz e dados" />
            </div>
          </div>
      		
      	</div>
      </section>
    )
  }
});


const ProjectsItem = React.createClass({
  render() {
    return (
      <div className="projects__item">
        <img className="projects__item__img" src={ this.props.img } alt={ this.props.title } />
        <div className="projects__item__mask">
          <div className="projects__item__mask--centered">
            <h3 className="projects__item__title">{ this.props.title }</h3>
            <p className="projects__item__description">{ this.props.description }</p>
          </div>
        </div>
      </div>
    )
  }
});



export default Projects;
