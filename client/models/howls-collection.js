var Collection = require('ampersand-rest-collection');
var Howl = require('./howl');
var playHowl = require('wolf-howler');

module.exports = Collection.extend({
  initialize: function () {
    var self = this;
    this.fetch();
    this.fetchRealtime();
    setInterval(function () {
      self.invoke('calculateTimeAgo');
    }, 1000 * 30); // 30 seconds
    // setInterval(function () {
    //   self.fetch();
    // }, 5000);
  },
  model: Howl,
  url: 'http://wolves.technology/howls',
  comparator: function (model) {
    return -model.createdAt.valueOf();
  },
  fetchRealtime: function () {
    var connection = new WebSocket('ws://wolves.technology');
    var self = this;
    connection.onmessage = function () {
      var message = JSON.parse(event.data);
      if (message.channel === self.url && message.action === 'update') {
        console.log('message received');
        self.fetchById(message.id, function () {
          playHowl();
        });

      }
    };
  }
});

// let's learn js and know the broswer
// let's make apps great