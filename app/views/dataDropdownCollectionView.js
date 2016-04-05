var DataDropdownCollectionView = Backbone.View.extend({

  tagName: 'select',

  initialize: function() {
    this.render();
  },

  events: {
    'change' : function(event) {
      this.collection.trigger('swapData', this.$el.val());
    }
  },

  render: function() {
    this.$el.children().detach();

    return this.$el.append(this.collection.map(function(dataOption) {
      return new DataDropdownModelView({ model: dataOption }).render();
    }));
  }

});