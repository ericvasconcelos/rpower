'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const Home = React.createClass({
  render() {
    return (
      <section id="home" className="section home">
      	<div className="home__overlay"></div>

      	<h1 className="home__title animated fadeInDown">Nós criamos os melhores projetos</h1>
      	<h2 className="home__subtitle delayOne animated fadeInUp">Nós entregamos os melhores serviços</h2>
      </section>
    )
  }
});

export default Home;
