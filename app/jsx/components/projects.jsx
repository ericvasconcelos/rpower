'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Title from './title';

const Projects = React.createClass({

  getInitialState() {
    return {
      windowSize: this.props.windowSize,
      projects: [
        { 
          title: 'Projeto Um', 
          description: 'Projeto de aterramento e SPDA e Projeto de iluminação', 
          img: 'assets/images/projeto-um.jpg'
        },
        { 
          title: 'Projeto Dois', 
          description: 'Projeto de aterramento e SPDA e Baixa e média tensão', 
          img: 'assets/images/projeto-dois.jpg'
        },
        { 
          title: 'Projeto Três', 
          description: 'Diagramas de malhas, funcionais e de interligação', 
          img: 'assets/images/projeto-tres.jpg'
        },
        { 
          title: 'Projeto Quatro', 
          description: 'Redes de telecomunicações para voz e dados', 
          img: 'assets/images/projeto-quatro.jpg'
        }
      ]
    }
  },

  render() {
    let projects = this.state.projects;

    return (
      <section id="projects" className="section projects">
      	<div className="container">
          
          <Title name="Projetos"/>

          <div className="row">
            {
              projects.map((project, i) => {
                return (
                  <div className="col-3" key={ i }>
                    <ProjectsItem img={ project.img } title={ project.title } description={ project.description } />
                  </div> 
                )
              })
            }     
          </div>
      		
      	</div>
      </section>
    )
  },
  
  componentWillReceiveProps(nextProps) {
    this.setState({ windowSize: nextProps.windowSize });
  }

});


const ProjectsItem = React.createClass({
  propTypes: { 
    title: React.PropTypes.bool,
    description: React.PropTypes.string,
    img: React.PropTypes.string
  },

  render() {
    const {
      title,
      description,
      img
    } = this.props;

    return (
      <div className="projects__item">
        <img className="projects__item__img" src={ img } alt={ title } />
        <div className="projects__item__mask">
          <div className="projects__item__mask--centered">
            <h3 className="projects__item__title">{ title }</h3>
            <p className="projects__item__description">{ description }</p>
          </div>
        </div>
      </div>
    )
  }
});

export default Projects;
