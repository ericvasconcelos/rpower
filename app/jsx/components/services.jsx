'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Title from './title';

const Services = React.createClass({

  getInitialState() {
    return {
      'services': [
        { 
          title: 'Projetos Elétricos', 
          icon: 'assets/images/plan.svg',
          modal: {
            id: 1,
            title: 'Projetos Elétricos',
            content: [
              'Instalações prediais, comerciais e industriais.',
              'Entrada de energia em baixa e média tensão.',
              'Aterramento e equipotencialização.',
              'Sistema de proteção contra descargas atmosféricas.',
              'Adequação para aumento de carga e tramitação com a concessionária local.',
              'Luminotécnica.',
              'Sinalização.',
              'Acionamento e comando de máquinas e equipamentos.',
              'Correção de fator de potência.',
              'Instalações elétricas para áreas classificadas.'
            ]
          }
        },
        { 
          title: 'Projetos com cabeamento estruturado', 
          icon: 'assets/images/networking-cable.svg',
          modal: {
            id: 2,
            title: 'Projetos com cabeamento estruturado', 
            content: [
              'Sistema de dados.',
              'Sistema de voz.',
              'CFTV.'
            ]
          }
        },
        { 
          title: 'Automação', 
          icon: 'assets/images/tablet.svg',
          modal: {
            id: 3,
            title: 'Automação', 
            content: [
              'Automação residencial cabeada e sem fio.',
              'Automação predial cabeada.',
              'Automação industrial.'
            ]
          }
        },
        { 
          title: 'Eficiência energética', 
          icon: 'assets/images/line-chart.svg',
          modal: {
            id: 4,
            title: 'Eficiência energética', 
            content: [
              'Análise de instalação existente.',
              'Estudos para novos projetos.',
              'Integração com novas tecnologias.'
            ]
          }
        },
        { 
          title: 'Serviços de instalação', 
          icon: 'assets/images/working-man.svg',
          modal: {
            id: 5,
            title: 'Serviços de instalação', 
            content: [
              'Serviços de instalação elétrica predial.',
              'Serviços de instalação elétrica comercial.',
              'Serviços de instalação de máquinas e equipamentos.'
            ]
          }
        },
        { 
          title: 'Outros serviços', 
          icon: 'assets/images/report.svg',
          modal: {
            id: 6,
            title: 'Outros serviços', 
            content: [
              'Vistoria.',
              'Consultoria.',
              'Laudo técnico.',
              'Parecer técnico.',
              'Perícia.',
              'Estudo de viabilidade técnica e econômica.'
            ]
          }
        }
      ]
    }
  },

  render() {
    
    return (
      <section id="services" className="section services">
      	<div className="container">

          <Title name="Serviços"/>

          <div className="row">
            {
              this.state.services.map((service, i) => {
                return (
                  <div className="col-4" key={ i }>
                    <ServicesItem icon={ service.icon } title={ service.title } modal={ service.modal }/>
                  </div>
                )
              })
            }
          </div>

      	</div>
      </section>
    )
  }
});


const ServicesItem = React.createClass({

  propTypes: {
    title: React.PropTypes.string,
    icon: React.PropTypes.string,
    modal: React.PropTypes.object
  },

  mountPopup(idModal, titleModal, contentModal) {
    ReactDOM.render(
      <Popup 
        id={ idModal } 
        title={ titleModal } 
        content={ contentModal } />, 
      document.querySelector('#components'))
  },

  render() {
    const {
      title,
      icon,
      modal
    } = this.props;

    return (
      <a className="services__item" 
        onClick={ () => this.mountPopup(modal.id, modal.title, modal.content) } 
        title={ title } 
        href={ '#popup' + modal.id} >
        <img className="services__item__img" src={ icon } alt={ title }/>
        <h4 className="services__item__title">{ title }</h4>
      </a>
    )
  }
});

const Popup = React.createClass({

  propTypes: {
    id: React.PropTypes.number,
    title: React.PropTypes.string,
    content: React.PropTypes.array.isRequired
  },

  unmountPopup() {
    ReactDOM.findDOMNode(this).classList.remove('overlay--open');
    window.setTimeout(() => {
      ReactDOM.unmountComponentAtNode(document.querySelector('#components'));
    }, 500);
  },

  render() {
    const {
      id, 
      title, 
      content
    } = this.props;

    return (
      <div id={ 'popup' + id } className="overlay">
        <div className="popup">
          <a className="popup__close" onClick={ this.unmountPopup } >&times;</a>
          <h2 className="popup__title">{ title }</h2>
          <div className="popup__content">
            <ul className="popup__content__list">
              {
                content.map((item, i) => {
                  return (
                    <li className="popup__content__list__item" key={ i }>{ item }</li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  },

  componentDidMount() {
    window.setTimeout(() => {
      ReactDOM.findDOMNode(this).classList.add('overlay--open');
    }, 1);
  }
});

export default Services;
