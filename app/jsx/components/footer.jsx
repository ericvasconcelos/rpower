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
      		<p className="contact__paragraph">Entre em contato conosco e faça seu orçamento.</p>
      		<p className="contact__paragraph">Telefone e WhatsApp: +55 21 98989-98989</p>
      		<p className="contact__paragraph">E-mail: rpower@gmail.com</p>
      	</div>
      </section>
    )
  }
});

export default Footer;
