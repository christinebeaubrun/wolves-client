var Model = require('ampersand-model');
var moment = require('moment');

module.exports = Model.extend({
  initialize: function () {
    this.calculateTimeAgo();
  },
  props: {
    id: 'string',
    content: 'string',
    createdAt: ['date', true, function () {
      return new Date();
    }],
    user: 'object'
  },
  session: {
    timeAgo: 'string'
  },
  calculateTimeAgo: function () {
    this.timeAgo = moment(this.createdAt).fromNow();
  },
  ajaxConfig: function () {
    if (!app.me.loggedIn) {
      return {};
    }

    return {
      headers: {
        'Auth-Token': app.me.token
      }
    };
  },
});