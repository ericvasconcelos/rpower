'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Title from './title';

const WhoWeAre = React.createClass({
  render() {
    const {
      content,
      mission,
      vision,
      values
    } = this.props.content
    return (
      <section id="who-we-are" className="section who-we-are">
        <div className="container">

          <Title name="Quem Somos"/>

        	<div className="shift-2 col-8">
        		<p>{ content }</p> 	
  				
            <h4>Missão</h4>
            <p>{ mission }</p>

            <h4>Visão</h4>
            <p>{ vision }</p>

            <h4>Valores</h4>
            <ul className="who-we-are__list">
              { values.map((item, i) => {
                return <li className="who-we-are__list__item" key={ i }>{ item }</li>;
              }) }
            </ul>
          </div>
        </div>

        <img className="who-we-are__bg" src="assets/images/bg-middle.jpg" alt="Engenharia Elétrica"/>
      </section>
    )
  }
});

export default WhoWeAre;
