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
      item: "",
      windowSize: window.innerWidth
    };
  },

  _handleClick(event) {
    
  },

  _handleSize() {
    this.setState({ windowSize: window.innerWidth });
  },

  componentDidMount() {
    window.addEventListener("resize", this._handleSize);
  },

  render() {
    return (
      <div>
        <Header windowSize={ this.state.windowSize } />
        <Home />
        <WhoWeAre />
        <Services />
        <Projects windowSize={ this.state.windowSize } />
        <Clients />
        <Footer />
      </div>
    )
  },

});

ReactDOM.render(
  <Site />,
  document.getElementById('app')
);














