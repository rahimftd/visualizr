var ChartThumbnailCollectionView = Backbone.View.extend({
  tagname: 'div class="row"',

  render: function() {
    this.$el.children().detach();

    this.$el.html('<div class="col-md-2"></div><div class="col-md-8"><div class="row" id="thumb-container">')
      .append(this.collection.map(function(thumbnail) {
        return new ChartThumbnailView({ model: thumbnail }).render();
      }))
      .append('</div></div><div class="col-md-2"></div>');
  }

});