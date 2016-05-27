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
      		<p className="contact__paragraph">Telefone: +55 21 97262-3355</p>
      		<p className="contact__paragraph">E-mail: contato@rpower.com.br</p>
      	</div>
      </section>
    )
  }
});

export default Footer;
