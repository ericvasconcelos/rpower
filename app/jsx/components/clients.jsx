'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Title from './title';

const Clients = React.createClass({
  render() {
    return (
      <section id="clients" className="section clients">
      	<div className="container">
      		<Title name="Clientes"/>

      		<nav className="clients__nav">
      			<ClientsItem img="assets/images/cliente1.png" />
      			<ClientsItem img="assets/images/cliente2.png" />
      			<ClientsItem img="assets/images/cliente3.png" />
      			<ClientsItem img="assets/images/cliente4.png" />
      			<ClientsItem img="assets/images/cliente5.png" />
      		</nav>
      	</div>
      </section>
    )
  }
});

const ClientsItem = React.createClass({

	propTypes: {

	},

	getDefaultProps() {
    return {
      
    };
  },

  render() {
    return (
      <a className="clients__item" href={ this.props.link } title={ this.props.title } >
        <img className="clients__item__img" src={ this.props.img } alt={ this.props.title }/>
      </a>
    )
  }
});

ClientsItem.propTypes = { 
	link: React.PropTypes.string,
	title: React.PropTypes.string,
	img: React.PropTypes.string
};

ClientsItem.defaultProps = { 
	link: '#',
  title: 'Cliente'
};

export default Clients;
