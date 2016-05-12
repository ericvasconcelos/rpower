'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Title from './title';

const WhoWeAre = React.createClass({
  render() {
    return (
      <section id="who-we-are" className="section who-we-are">
        <div className="container">

          <Title name="Quem Somos"/>

        	<div className="col-6">
        		<p>A RPOWER é uma empresa que atua no segmento de engenharia e serviços de instalação.</p>
            <p>O seu portfólio promove soluções diversas na área de elétrica, o que engloba: Projetos, serviços de instalação, reformas, estudos, entre outras atividades.</p>
            <p>A empresa possui profissionais com experiência de mercado de longa data e atua dentro dos critérios estabelecidos pelo CONFEA, Ministério do Trabalho e ABNT.</p> 	
  				
            <h4>Missão</h4>
            <p>Ser uma empresa que forneça nos seus serviços com segurança, qualidade, ética e sustentabilidade.</p>

            <h4>Visão</h4>
            <p>Ser uma empresa conceituada no setor de engenharia e serviços de instalação elétrica a nível nacional.</p>

            <h4>Valores</h4>
            <ul>
              <li>Segurança</li>
              <li>Qualidade</li>
              <li>Ética</li>
              <li>Sustentabilidade</li>
            </ul>
          </div>
        	<div className="col-6">
        	</div>
        </div>
      </section>
    )
  }
});

export default WhoWeAre;
