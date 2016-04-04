var ChartThumbnailView = Backbone.View.extend({
  tagname: 'div class="col-md-4"',

  template: _.template('<h3><%= title %></h3>'),

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});