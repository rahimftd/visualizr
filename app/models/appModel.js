var AppModel = Backbone.Model.extend({
  initialize: function() {
    this.set('chartThumbnailCollection', new ChartThumbnailCollection(chartThumbnailData));
    this.set('chartModel', new ChartModel());

    this.get('chartThumbnailCollection').on('swapChart', function(file) {
      this.get('chartModel').getChartScript(file);
    }, this)
  }
});