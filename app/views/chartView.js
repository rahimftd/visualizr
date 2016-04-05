var ChartView = Backbone.View.extend({
  tagName: 'div',

  initialize: function() {

    this.model.on('change', function() {
      console.log('detected a change', window.jsonPath);
      if (this.model.get('chartScript')) {
        this.render();
      }
    }, this);
  },

  render: function() {
    this.$el.html('');
    $('svg').remove();
    return this.$el.append(this.model.get('chartScript'));
  }

});