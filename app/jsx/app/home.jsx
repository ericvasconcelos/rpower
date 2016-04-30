'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Header,
  Home,
  WhoWeAre,
  Services,
  Projects,
  Clients,
  Footer
} from '../components';

const Site = React.createClass({

  getInitialState() {
    return {
      item: ""
    };
  },

  _handleClick(event) {
    
  },

  render() {
    return (
      <div>
        <Header />
        <Home />
        <WhoWeAre />
        <Services />
        <Projects />
        <Clients />
        <Footer />
      </div>
    )
  }

});

ReactDOM.render(
  <Site />,
  document.getElementById('app')
);














