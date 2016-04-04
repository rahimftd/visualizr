var chartThumbnailData = [
{
  title: 'Bubble',
  file: 'bubble.js',
  image: 'https://camo.githubusercontent.com/dbaf877e0e81e571ae42fa1f6e1115bf052f72ca/687474703a2f2f64336a732e6f72672f65782f627562626c652e706e67'
}, 
{
  title: 'Interactive Bubble',
  file: 'interactiveBubble.js',
  image: 'https://camo.githubusercontent.com/0330ad828011dab4311257a784e6dffcdbf11281/687474703a2f2f64336a732e6f72672f65782f7061636b2d6869657261726368792e706e67'
}, 
{
  title: 'Interactive Sunburst',
  file: 'interactiveSunburst.js',
  image: 'https://camo.githubusercontent.com/3579d11cf675da2a12ffcdad356e524978b97434/687474703a2f2f64336a732e6f72672f65782f636f666665652e706e67'
}];

var testScript = '<script>var diameter = 800;var format = d3.format(",d");var color = d3.scale.category20c();var bubble = d3.layout.pack().sort(null).size([diameter, diameter]).padding(1.5);var svg = d3.select("#chart-container").append("svg").attr("width", diameter).attr("height", diameter).attr("class", "bubble");d3.json("data/testData.json", function(error, root) {if (error) throw error;var node = svg.selectAll(".node").data(bubble.nodes(classes(root)).filter(function(d) { return !d.children; })).enter().append("g").attr("class", "node").attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });node.append("title").text(function(d) { return d.className + ": " + format(d.value); });node.append("circle").attr("r", function(d) { return d.r; }).style("fill", function(d) { return color(d.packageName); });node.append("text").attr("dy", ".3em").style("text-anchor", "middle").text(function(d) { return d.className.substring(0, d.r / 3); });});function classes(root) {var classes = [];function recurse(name, node) {if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });else classes.push({packageName: name, className: node.name, value: node.size});}recurse(null, root);return {children: classes};}d3.select(self.frameElement).style("height", diameter + "px");</script>';