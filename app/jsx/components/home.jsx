'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const Home = React.createClass({
  render() {
  	const {
  		title,
  		subtitle
  	} = this.props.content

    return (
      <section id="home" className="section home">
      	<div className="home__overlay"></div>

      	<h1 className="home__title animated fadeInDown">{ title }</h1>
      	<h2 className="home__subtitle delayOne animated fadeInUp">{ subtitle }</h2>
      </section>
    )
  }
});

export default Home;
