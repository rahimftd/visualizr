var AppView = Backbone.View.extend({

  tagName: 'div',

  template: '<div class="row"><div class="col-md-2"></div><div class="col-md-8"><h1>Visualizr</h1></div><div class="col-md-2"></div></div>',

  initialize: function() {
    this.chartThumbnailCollectionView = new ChartThumbnailCollectionView({ collection: this.model.get('chartThumbnailCollection') });
    this.chartView = new ChartView({ model: this.model.get('chartModel') });
  },

  render: function() {
    this.$el.attr('class', 'container');
    return this.$el.append([
      this.template,
      this.chartThumbnailCollectionView.$el,
      this.chartView.$el
    ]);
  }

});