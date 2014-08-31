var Model = require('ampersand-model');

module.exports = Model.extend({
  initialize: function () {
    var self = this;
    this.on('change:token', function () {
      localStorage.token = self.token;
    });

    if (localStorage.token) {
      this.token = localStorage.token;
    }
  },

  props: {
    id: 'string',
    username: 'string'
  },

  session: {
    token: 'string'
  },

  derived: {
    loggedIn: {
      deps: ['token'],
      fn: function () {
        if (this.token) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
});