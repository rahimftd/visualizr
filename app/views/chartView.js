var ChartView = Backbone.View.extend({
  tagName: 'div',

  template: _.template('<div class="col-md-2"></div><div class="col-md-8" id="chart-container"></div><div class="col-md-2"></div><%= chartScript %>'),

  initialize: function() {
    this.model.on('change', function() {
      this.render();
    }, this);
  },

  render: function() {
    this.$el.attr('class', 'row');
    console.log('script', this.model.attributes);
    return this.$el.append(this.template(this.model.attributes));
  }

});