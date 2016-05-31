'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Title from './title';

const Services = React.createClass({

  render() {
    const {
      content
    } = this.props;

    return (
      <section id="services" className="section services">
      	<div className="container">

          <Title name="Serviços"/>

          <div className="row">
            {
              content.map((service, i) => {
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
