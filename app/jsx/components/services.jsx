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

  _openService() {
    console.log("open modal");
  },

  render() {
    return (
      <a className="services__item" onClick={ this._openService } title={ this.props.title } >
        <img className="services__item__img" src={ this.props.icon } alt={ this.props.title }/>
        <h4 className="services__item__title">{ this.props.title }</h4>
      </a>
    )
  }
});

export default Services;
