var DataDropdownModelView = Backbone.View.extend({
  tagName: 'option',

  render: function() {
    this.$el.attr('value', this.model.get('file'));
    return this.$el.html(this.model.get('name'));
  }
});