var ChartModel = Backbone.Model.extend({
  initialize: function() {
    window.jsonPath = 'data/testdata.json'
  },

  getChartScript: function(fileName) {
   var that = this;
   $.ajax({
     method: 'GET',
     url: 'http://127.0.0.1:3000/chartscripts',
     headers: {
       chartfile: fileName
     },
     success: function(data) {
      that.set('chartScript', data);
     }
   }); 
  },

  loadNewDataset: function(dataset) {
    window.jsonPath = dataset;
    this.set('datasource', dataset);
  }
});
