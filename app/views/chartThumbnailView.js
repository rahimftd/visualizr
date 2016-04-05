var ChartThumbnailView = Backbone.View.extend({
  tagName: 'div',

  template: _.template('<h5><%= title %></h5>'),

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