var AppModel = Backbone.Model.extend({
  initialize: function() {
    this.set('chartThumbnailCollection', new ChartThumbnailCollection(chartThumbnailData));
    this.set('chartModel', new ChartModel());
  }
});