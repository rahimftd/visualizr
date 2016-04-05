var ChartThumbnailView = Backbone.View.extend({
  tagName: 'li',

  template: _.template('<%= title %>'),

  events: {
    'click': function() {
      this.model.trigger('swapChart', this.model.get('file'));
    }
  },

  render: function() {
    this.$el.attr('class', 'nav-item nav-link');
    this.$el.attr('style', 'margin: 20px');
    return this.$el.html(this.template(this.model.attributes));
  }

});