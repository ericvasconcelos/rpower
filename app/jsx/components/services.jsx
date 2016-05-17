'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Title from './title';

const Services = React.createClass({

  render() {
    return (
      <section id="services" className="section services">
      	<div className="container">

          <Title name="Serviços"/>

          <div className="row">
            <div className="col-4">
              <ServicesItem icon="assets/images/city.svg" title="Predial"/>
            </div>
            <div className="col-4">
              <ServicesItem icon="assets/images/factory.svg" title="Industriais"/>        
            </div>
            <div className="col-4">
              <ServicesItem icon="assets/images/technology.svg" title="Sistemas Eletrônicos"/>
            </div>
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
    return (
      <a className="services__item" 
        onClick={ () => this.mountPopup('1', 'Modal Teste', 'Olha que legal uma content pra minha modal') } 
        title={ this.props.title } 
        href={ '#popup' + '1'} >
        <img className="services__item__img" src={ this.props.icon } alt={ this.props.title }/>
        <h4 className="services__item__title">{ this.props.title }</h4>
      </a>
    )
  }
});

const Popup = React.createClass({

  componentWillMount: function() {
    console.log("will");
  },

  unmountPopup() {
    ReactDOM.unmountComponentAtNode(document.querySelector('#components'));
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
          <a className="close" href="#" onClick={ this.unmountPopup } >&times;</a>
          <h2>{ title }</h2>
          <div className="content">
            { content }
          </div>
        </div>
      </div>
    )
  },

  componentDidMount: function() {
    console.log("did");
  }
});

export default Services;
