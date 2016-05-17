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

        	<div className="shift-2 col-8">
        		<p>A RPOWER é uma empresa que atua no segmento de engenharia e serviços de instalação. O seu portfólio promove soluções diversas na área de elétrica, o que engloba: Projetos, serviços de instalação, reformas, estudos, entre outras atividades.A empresa possui profissionais com experiência de mercado de longa data e atua dentro dos critérios estabelecidos pelo CONFEA, Ministério do Trabalho e ABNT.</p> 	
  				
            <h4>Missão</h4>
            <p>Ser uma empresa que forneça nos seus serviços com segurança, qualidade, ética e sustentabilidade.</p>

            <h4>Visão</h4>
            <p>Ser uma empresa conceituada no setor de engenharia e serviços de instalação elétrica a nível nacional.</p>

            <h4>Valores</h4>
            <ul className="who-we-are__list">
              <li className="who-we-are__list__item">Segurança</li>
              <li className="who-we-are__list__item">Qualidade</li>
              <li className="who-we-are__list__item">Ética</li>
              <li className="who-we-are__list__item">Sustentabilidade</li>
            </ul>
          </div>
        </div>

        <img className="who-we-are__bg" src="assets/images/bg-middle.jpg" alt="Engenharia Elétrica"/>
      </section>
    )
  }
});

export default WhoWeAre;
