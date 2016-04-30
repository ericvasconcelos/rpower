'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const Services = React.createClass({

	_openService() {
		console.log("open modal");
	},

  render() {
    return (
      <div id="services" className="services">
      	<div className="container">
      		<nav>
      			<a onClick={ this._openService } >
      				<i>one</i>
      				<h3>Service one</h3>
      			</a>
      			<a onClick={ this._openService } >
      				<i>two</i>
      				<h3>Service two</h3>
      			</a>
      			<a onClick={ this._openService } >
      				<i>three</i>
      				<h3>Service three</h3>
      			</a>
      			<a onClick={ this._openService } >
      				<i>four</i>
      				<h3>Service four</h3>
      			</a>
      		</nav>
      	</div>
      </div>
    )
  }
});

export default Services;
