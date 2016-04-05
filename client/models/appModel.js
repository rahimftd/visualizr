var AppModel = Backbone.Model.extend({
  initialize: function() {
    this.set('chartThumbnailCollection', new ChartThumbnailCollection(chartOptions));
    this.set('chartModel', new ChartModel());
    this.set('dataDropdownCollection', new DataDropdownCollection(dataOptions));

    this.get('chartThumbnailCollection').on('swapChart', function(file) {
      this.get('chartModel').getChartScript(file);
    }, this);

    this.get('dataDropdownCollection').on('swapData', function(dataset) {
      this.get('chartModel').loadNewDataset(dataset);
    }, this);
  }
});