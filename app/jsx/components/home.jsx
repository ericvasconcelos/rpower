'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const Home = React.createClass({
  render() {
    return (
      <section id="home" className="section home">
      	<div className="home__overlay"></div>

      	<h1 className="home__title animated fadeInDown">Rpower</h1>
      	<h2 className="home__subtitle delayOne animated fadeInUp">Electrical Engineering</h2>
      </section>
    )
  }
});

export default Home;
