'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Title from './title';

const Clients = React.createClass({
  getInitialState() {
    return {
      clients: [
        {
          title: 'Ampla',
          img: '/assets/images/logo-ampla.png',
          link: 'https://www.ampla.com/'
        },
        {
          title: 'Petrobras',
          img: '/assets/images/logo-petrobras.png',
          link: 'http://www.petrobras.com.br/'
        },
        {
          title: 'Light',
          img: '/assets/images/logo-light.png',
          link: 'http://www.light.com.br/'
        },
        {
          title: 'Isadora Cabral Arquitetura',
          img: '/assets/images/logo-isadora-cabral-arquitetura.png',
          link: 'http://isadoracabralarquitetura.com.br/'
        },
        {
          title: 'GINBRAS',
          img: '/assets/images/logo-ginbras.png',
          link: 'http://ginbras.com.br/'
        },
      ]
    }
  },

  render() {
    return (
      <section id="clients" className="section clients">
      	<div className="container">
      		<Title name="Clientes"/>

      		<nav className="clients__nav">

            {
              this.state.clients.map((client, i) => {
                return (
                  <ClientsItem img={ client.img } link={ client.link } key={ i } />
                )
              })
            }
      		</nav>
      	</div>
      </section>
    )
  }
});

const ClientsItem = React.createClass({

  propTypes: { 
    link: React.PropTypes.string,
    title: React.PropTypes.string,
    img: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      link: '#',
      title: 'Cliente'
    }
  },

  render() {
    const {
      title,
      link,
      img
    } = this.props;
    
    return (
      <a className="clients__item" href={ link } title={ title } target="_blank" >
        <img className="clients__item__img" src={ img } alt={ title }/>
      </a>
    )
  }
});

export default Clients;
