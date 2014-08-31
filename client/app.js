var MainView = require('./views/main');
var domready = require('domready');
var Router = require('./router');
var HowlsCollection = require('./models/howls-collection');
var Me = require('./models/me');

window.app = {
  init: function () {
    var self = this;
    this.me = new Me();
    this.router = new Router();
    this.howls = new HowlsCollection();

    domready(function () {
        self.view = new MainView({
          el: document.body
        });
        self.router.history.start({pushState: true});
    });
  }
};

window.app.init();