'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const Title = React.createClass({
  render() {
    return <h2 className="title">{ this.props.name }</h2>;
  }
});

export default Title;
