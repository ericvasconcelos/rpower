'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const Header = React.createClass({

	getInitialState() {
		return {
			"home": "/",
			"whoweare": "#who-we-are",
			"services": "#services",
			"projects": "#projects",
			"clients": "#clients",
			"contact": "#contact"
		}
	},

  render() {
    return (
      <header className="header">
      	<div className="container">

	      	<a className="header__logo" href={ this.state.home }>Logo</a>

	      	<menu className="header__menu">
	      		<a className="header__menu__item" href={ this.state.whoweare }>Quem Somos</a>
	      		<a className="header__menu__item" href={ this.state.services }>Serviços</a>
	      		<a className="header__menu__item" href={ this.state.projects }>Projetos</a>
	      		<a className="header__menu__item" href={ this.state.clients }>Clientes</a>
	      		<a className="header__menu__item" href={ this.state.contact }>Contato</a>
	      	</menu>

      	</div>
      </header>
    )
  }
});

export default Header;
