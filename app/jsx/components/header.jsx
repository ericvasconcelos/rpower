'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const Header = React.createClass({

	_animateScrollHeader(event) {

		let href = event.currentTarget.getAttribute('data-ref'),
			doc = document,
			element = doc.body,
			to = Math.round(doc.querySelector(href).getBoundingClientRect().top + element.scrollTop),
			duration = 600;

		function scrollTo(element, to, duration) {
		  if (duration <= 0) return;
		  var difference = (to - element.scrollTop) - 174;
		  var perTick = difference / duration * 10;

		  setTimeout(function() {
		    element.scrollTop = element.scrollTop + perTick;
		    if (element.scrollTop == to) return;
		    scrollTo(element, to, duration - 10);
		  }, 10);
		}

		scrollTo(element, to, duration);

		return false;
	},

	getInitialState() {
		return {
			windowSize: this.props.windowSize,
			menuItems: [
				{ link: '#who-we-are', text: 'Quem Somos' },
				{ link: '#services', text: 'Serviços' },
				{ link: '#projects', text: 'Projetos' },
				{ link: '#clients', text: 'Clientes' },
				{ link: '#contact', text: 'Contato' }
			]
		}
	},

  render() {
		return (
      <header className="header">
      	<div className="container">

	      	<a className="header__logo" data-ref="#home" onClick={ this._animateScrollHeader }>
	      		<img src="assets/images/logo.svg" />	
	      	</a>

	      	<menu className="header__menu">
		      	{ 
		      		this.state.windowSize > 1200 ?
			      		this.state.menuItems.map((item, i) => {
			      			return <MenuItem
			      				key={ i }
			      				href={ item.link }
			      				handler={ this._animateScrollHeader }>{ item.text }</MenuItem>
			      		}) : ''
	      		} 
	      	</menu>

      	</div>
      </header>
    )
  },

  componentWillReceiveProps(nextProps) {
    this.setState({ windowSize: nextProps.windowSize });
  }
});

const MenuItem = React.createClass({
	render() {
    return <a className="header__menu__item" data-ref={ this.props.href } onClick={ this.props.handler }>{ this.props.children }</a>
  }
})

export default Header;
