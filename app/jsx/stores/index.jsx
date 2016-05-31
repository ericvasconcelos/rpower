'use strict';

import Reflux from 'reflux';
import Actions from '../actions';

const ajaxContent  = Reflux.createStore({

  listenables: [Actions],

  init: function() {
    this.fetch();
  },

  getInitialState: function() {
    return this.content;
  },

  fetch: function(){

    var self = this,
      request = new XMLHttpRequest();

    request.open(
      'GET',
      window.location.origin + '/content/content.json',
      true
    );

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        const content = JSON.parse(request.responseText);
        self.trigger({ content });
      } else {
        new Error('Server responded with a status of ' + request.status);
      }
    };

    request.onerror = function() {
      new Error('Connection error');
    };

    request.send();
  }
});

export default ajaxContent;
