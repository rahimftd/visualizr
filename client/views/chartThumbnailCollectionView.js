var ChartThumbnailCollectionView = Backbone.View.extend({
  tagName: 'ul',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();

    this.$el.attr('class', 'nav nav-pills');

    return this.$el.append(this.collection.map(function(thumbnail) {
      return new ChartThumbnailView({ model: thumbnail }).render()
    }));
  }

});