var AppView = Backbone.View.extend({

  initialize: function() {
    this.chartThumbnailCollectionView = new ChartThumbnailCollectionView({ collection: this.model.get('chartThumbnailCollection') });
    this.dataDropdownCollectionView = new DataDropdownCollectionView({ collection: this.model.get('dataDropdownCollection') });
    this.chartView = new ChartView({ model: this.model.get('chartModel') });
  },

  render: function() {
    $('#nav-container').append(this.chartThumbnailCollectionView.render());
    $('#data-container').append(this.dataDropdownCollectionView.render());
    $('#chart-container').append(this.chartView.render());
  }

});