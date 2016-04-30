'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const WhoWeAre = React.createClass({
  render() {
    return (
      <div id="who-we-are" className="who-we-are">
      	<div className="content-left">
      		<h2>Quem Somos</h2>
      		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      		Nulla laudantium eveniet, molestias ducimus reiciendis saepe voluptatibus. 
      		Rerum recusandae deleniti omnis ipsam, officia explicabo nihil,
    		 	esse doloribus laboriosam. Ipsam, labore, voluptatem. <br />
					Quo ipsum suscipit amet iste hic facere culpa officiis, 
					labore, sint dicta repellat vero libero totam cumque, 
					quaerat id eveniet dolor dolore tempora odio non nihil 
					debitis corporis. Cum, asperiores.</p>      	
				</div>
      	<div className="content-right">
      	</div>
      </div>
    )
  }
});

export default WhoWeAre;
