var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
  template: templates.includes.howl,
  bindings: {
    'model.timeAgo': {
      type: 'text',
      hook: 'time-ago'
    },
    'model.content': {
      type: 'text',
      hook: 'content'
    }
  }
});