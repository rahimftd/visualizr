var ChartThumbnailView = Backbone.View.extend({
  tagName: 'div',

  template: _.template('<h3><%= title %></h3>'),

  render: function() {
    this.$el.attr('class', 'col-md-4');
    return this.$el.html(this.template(this.model.attributes));
  }

});