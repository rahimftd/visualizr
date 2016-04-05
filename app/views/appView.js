var AppView = Backbone.View.extend({

  tagName: 'div',

  template: '<div class="row"><div class="col-md-1"></div><div class="col-md-9 jumbotron jumbotron-fluid"><h1>Visualizr</h1><h4>Interactive, user-friendly data visualizer</h4></div><div class="col-md-1"></div></div>',

  initialize: function() {
    this.chartThumbnailCollectionView = new ChartThumbnailCollectionView({ collection: this.model.get('chartThumbnailCollection') });
    this.dataDropdownCollectionView = new DataDropdownCollectionView({ collection: this.model.get('dataDropdownCollection') });
    this.chartView = new ChartView({ model: this.model.get('chartModel') });
  },

  render: function() {
    this.$el.attr('class', 'container-fluid');
    return this.$el.append([
      this.template,
      this.dataDropdownCollectionView.$el,
      this.chartThumbnailCollectionView.$el,
      this.chartView.$el
    ]);
  }

});