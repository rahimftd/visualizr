var ChartThumbnailCollectionView = Backbone.View.extend({
  tagName: 'div',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();

    this.$el.attr('class', 'row');

    this.$el.append(this.collection.map(function(thumbnail) {
      return new ChartThumbnailView({ model: thumbnail }).render()
    }));
  }

});