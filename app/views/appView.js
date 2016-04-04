var AppView = Backbone.Model.extend({
  tagname = 'div class="container"',

  template: '<div class="row"><div class="col-md-2"></div><div class="col-md-8"><h1>Visualizr</h1></div><div class="col-md-2"></div></div>',

  initialize: function() {
    this.chartThumbnailView = new ChartThumbnailView(chartThumbnailData);
    this.chartView = new ChartView();
  },

  render: function() {
    return this.$el.html([
      this.template,
      this.chartThumbnailView.$el,
      this.chartView.$el
    ]);
  }

});