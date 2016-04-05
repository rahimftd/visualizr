var ChartThumbnailCollectionView = Backbone.View.extend({
  tagName: 'div',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();

    this.$el.attr('class', 'row');
    this.$el.attr('style', 'display: flex');

    this.$el.append('<div class="col-md-1"></div>');

    this.$el.append(this.collection.map(function(thumbnail) {
      return new ChartThumbnailView({ model: thumbnail }).render()
    }));

    this.$el.append('<div class="col-md-1"></div>');
  }

});