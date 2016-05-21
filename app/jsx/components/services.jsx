'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Title from './title';

const Services = React.createClass({

  getInitialState() {
    return {
      'services': [
        { 
          title: 'Predial', 
          icon: 'assets/images/city.svg',
          modal: {
            id: 1,
            title: 'Modal Teste 1',
            content: 'Olha que legal uma content pra minha modal Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deserunt, in corrupti error molestiae explicabo non cupiditate quo harum ipsum ut tenetur minima nam cumque aperiam placeat. Deleniti libero, quia. Olha que legal uma content pra minha modal Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deserunt, in corrupti error molestiae explicabo non cupiditate quo harum ipsum ut tenetur minima nam cumque aperiam placeat. Deleniti libero, quia. Olha que legal uma content pra minha modal Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deserunt, in corrupti error molestiae explicabo non cupiditate quo harum ipsum ut tenetur minima nam cumque aperiam placeat. Deleniti libero, quia. Olha que legal uma content pra minha modal Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deserunt, in corrupti error molestiae explicabo non cupiditate quo harum ipsum ut tenetur minima nam cumque aperiam placeat. Deleniti libero, quia. Olha que legal uma content pra minha modal Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deserunt, in corrupti error molestiae explicabo non cupiditate quo harum ipsum ut tenetur minima nam cumque aperiam placeat. Deleniti libero, quia.'
          }
        },
        { 
          title: 'Industriais', 
          icon: 'assets/images/factory.svg',
          modal: {
            id: 2,
            title: 'Modal Teste 2',
            content: 'Olha que legal uma content pra minha modal Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deserunt, in corrupti error molestiae explicabo non cupiditate quo harum ipsum ut tenetur minima nam cumque aperiam placeat. Deleniti libero, quia. Olha que legal uma content pra minha modal Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deserunt, in corrupti error molestiae explicabo non cupiditate quo harum ipsum ut tenetur minima nam cumque aperiam placeat. Deleniti libero, quia. Olha que legal uma content pra minha modal Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deserunt, in corrupti error molestiae explicabo non cupiditate quo harum ipsum ut tenetur minima nam cumque aperiam placeat. Deleniti libero, quia. Olha que legal uma content pra minha modal Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deserunt, in corrupti error molestiae explicabo non cupiditate quo harum ipsum ut tenetur minima nam cumque aperiam placeat. Deleniti libero, quia. Olha que legal uma content pra minha modal Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deserunt, in corrupti error molestiae explicabo non cupiditate quo harum ipsum ut tenetur minima nam cumque aperiam placeat. Deleniti libero, quia.'
          }
        },
        { 
          title: 'Sistemas Eletrônicos', 
          icon: 'assets/images/technology.svg',
          modal: {
            id: 3,
            title: 'Modal Teste 3',
            content: 'Olha que legal uma content pra minha modal Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deserunt, in corrupti error molestiae explicabo non cupiditate quo harum ipsum ut tenetur minima nam cumque aperiam placeat. Deleniti libero, quia. Olha que legal uma content pra minha modal Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deserunt, in corrupti error molestiae explicabo non cupiditate quo harum ipsum ut tenetur minima nam cumque aperiam placeat. Deleniti libero, quia. Olha que legal uma content pra minha modal Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deserunt, in corrupti error molestiae explicabo non cupiditate quo harum ipsum ut tenetur minima nam cumque aperiam placeat. Deleniti libero, quia. Olha que legal uma content pra minha modal Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deserunt, in corrupti error molestiae explicabo non cupiditate quo harum ipsum ut tenetur minima nam cumque aperiam placeat. Deleniti libero, quia. Olha que legal uma content pra minha modal Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deserunt, in corrupti error molestiae explicabo non cupiditate quo harum ipsum ut tenetur minima nam cumque aperiam placeat. Deleniti libero, quia.'
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
          <div className="popup__content" dangerouslySetInnerHTML={{__html: content}}></div>
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
