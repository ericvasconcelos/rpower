'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Title from './title';

const Footer = React.createClass({
  render() {
    const { content } = this.props

    return (
      <section id="contact" className="section contact">
      	<div className="container">
      		<Title name="Contato"/>
          { content.map((item, i) => {
            return <p className="contact__paragraph" key={ i }>{ item }</p>;
          }) }
      	</div>
      </section>
    )
  }
});

export default Footer;
