var ChartThumbnailView = Backbone.View.extend({
  tagName: 'div',

  template: _.template('<h3><%= title %></h3>'),

  events: {
    'click': function() {
      this.model.trigger('swapChart', this.model.get('file'));
    }
  },

  render: function() {
    this.$el.attr('class', 'col-md-3 nav');
    return this.$el.html(this.template(this.model.attributes));
  }

});