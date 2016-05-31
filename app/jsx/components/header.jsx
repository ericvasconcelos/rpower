'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const Header = React.createClass({

	getInitialState() {
		return {
			windowSize: this.props.windowSize,
			headerOpen: false,
			menuItems: this.props.content.menuItems
		}
	},

	_animateScrollHeader(event) {
		let href = event.currentTarget.getAttribute('data-ref'),
			doc = document,
			element = doc.body,
			to = Math.round(doc.querySelector(href).getBoundingClientRect().top + element.scrollTop),
			duration = 600;

		function scrollTo(element, to, duration) {
		  if (duration <= 0) return;
		  var difference = (to - element.scrollTop) - 204;
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

	_openMenu() {
		this.setState({ headerOpen: !this.state.headerOpen });
	},

	_handlerMenu(event) {
		this._animateScrollHeader(event);
		this.setState({ headerOpen: false });
	},

  render() {
		return (
      <header className={ this.state.headerOpen ? 'header header--open' : 'header' }>
      	<div className="container">

	      	<a className="header__logo" data-ref="#home" onClick={ this._handlerMenu }>
	      		<img src="assets/images/logo-rpower.png" />	
	      	</a>

	      	<a className="header__menu__icon" onClick={ this._openMenu }>
      			<span className="header__menu__icon__line"></span>
      		</a>

	      	<menu className="header__menu">
		      	{ 
		      		this.state.menuItems.map((item, i) => {
		      			return <MenuItem
		      				key={ i }
		      				href={ item.link }
		      				handler={ this._handlerMenu }>{ item.text }</MenuItem>
		      		})
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

MenuItem.propTypes = { 
	'data-ref': React.PropTypes.string,
	onClick: React.PropTypes.func
};

export default Header;
