'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Reflux from 'reflux';
import Actions from '../actions';
import ajaxContent from '../stores';
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

  mixins: [
    Reflux.connect(ajaxContent, 'content'),
  ],

  getInitialState() {
    return {
      content: '',
      item: '',
      windowSize: window.innerWidth
    };
  },

  _handleSize() {
    this.setState({ windowSize: window.innerWidth });
  },

  _renderSite(content) {
    if (content) {
      return (
        <div>
          <Header content={ content.header } windowSize={ this.state.windowSize } />
          <Home content={ content.home } />
          <WhoWeAre content={ content.whoWeAre } />
          <Services content={ content.services } />
          <Clients content={ content.clients } />
          <Footer content={ content.footer } />
        </div>
      )
    }
  },

  componentDidMount() {
    window.addEventListener("resize", this._handleSize);
  },

  render() {
    let content = this.state.content;
    return (
      <div>
        { this._renderSite(content.content) }
      </div>
    )
  },

});

ReactDOM.render(
  <Site />,
  document.getElementById('app')
);














