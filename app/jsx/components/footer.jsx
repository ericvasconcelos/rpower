'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Title from './title';

const Footer = React.createClass({
  render() {
    return (
      <section id="contact" className="section contact">
      	<div className="container">
      		<Title name="Contato"/>
      		<p>Entre em contato conosco e faça seu orçamento.</p>
      		<p>Telefone e WhatsApp: +55 21 98989-98989</p>
      		<p>E-mail: rpower@gmail.com</p>
      	</div>
      </section>
    )
  }
});

export default Footer;
