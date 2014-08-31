var View = require('ampersand-view');
var templates = require('../templates');
var HowlView = require('../views/howl');

module.exports = View.extend({
  template: templates.pages.howls,
  events: {
    'submit form': 'handleFormSubmit'
  },
  render: function () {
    this.renderWithTemplate();
    this.renderCollection(app.howls, HowlView, this.queryByHook('howls-container'));
  },
  handleFormSubmit: function (event) {
    event.preventDefault();
    var howlInput = this.queryByHook('howl-input');
    if (howlInput.value) {
      var model = app.howls.create({content: howlInput.value}, {
        error: function () {
          howlInput.value = value;
          alert('hey that did not work, try howling again');
        }
      });
      howlInput.value = "";
    }
  }
});