var View = require('ampersand-view');
var Templates = require('../templates');
var ViewSwitcher = require('ampersand-view-switcher');

module.exports = View.extend({
  events: {
    'click a[href]': 'handleLinkClick'
  },
  template: Templates.body,
  initialize: function() {
    this.listenTo(app.router, 'page', this.handleNewPage);
  },
  render: function() {
    this.renderWithTemplate();
    var pageContainter = this.queryByHook('page-container');
    this.pageSwitcher = new ViewSwitcher(pageContainter);
  },
  autoRender: true,
  handleLinkClick: function (event) {
    var target = event.target;
    var isLocal = target.host === window.location.host;

    if (isLocal && !event.altKey && !event.metaKey && !event.shiftKey && !event.ctrlKey) {
      event.preventDefault();
      app.router.history.navigate(target.pathname, {trigger: true});
    }
  },
  handleNewPage: function(pageView) {
    this.pageSwitcher.set(pageView);
  }
});