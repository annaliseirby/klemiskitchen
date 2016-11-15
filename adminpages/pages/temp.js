
var width = document.getElementById("morris-area-chart").offsetWidth,
    height = 500,
    radius = Math.min(width, height) / 2 - 10;

var myArr = d3.range(6).map(Math.random).sort(d3.descending);

var data = d3.range(6).map(Math.random).sort(d3.descending);

var labels = ['Poultry', 'Pork', 'Beef', 'Multi-Meat', 'Veggie', 'Fish'];


//
// var sliceLabel = label_group.selectAll("text")
//     .data(donut(data.pct));
// sliceLabel.enter().append("svg:text")
//     .attr("class", "arcLabel")
//     .attr("transform", function(d) {return "translate(" + arc.centroid(d) + ")"; })
//     .attr("text-anchor", "middle")
//     .text(function(d, i) {return labels[i]; });

var color = d3.scale.category20();

for (var i = 0; i < labels.length; i++) {
    try {
        console.log("CHANGING" + labels[i].toLowerCase());
        console.log("BACKGROUND COLOR: ");
        console.log(color(i));
        document.getElementById(labels[i].toLowerCase()).style.backgroundColor = color(i);
    } catch (e) {
        console.log(e)
    }

}

console.log("Color is ");
console.log(color);

var arc = d3.svg.arc()
    .outerRadius(radius);

var pie = d3.layout.pie();

var svg = d3.select("#morris-area-chart").append("svg")
    .datum(data)
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var arcs = svg.selectAll("g.arc")
    .data(pie)
    .enter().append("g")
    .attr("class", "arc");

arcs.append("path")
    .attr("fill", function(d, i) { return color(i); })
    .transition()
    .ease("bounce")
    .duration(2000)
    .attrTween("d", tweenPie)
    .transition()
    .ease("elastic")
    .delay(function(d, i) { return 2000 + i * 50; })
    .duration(750)
    .attrTween("d", tweenDonut);

// arcs.append("svg:text")
//     .attr("transform", function(d) {
//         var c = arc.centroid(d),
//             x = c[0],
//             y = c[1],
//             // pythagorean theorem for hypotenuse
//             h = Math.sqrt(x*x + y*y);
//         return "translate(" + (x/h * labelr) +  ',' +
//             (y/h * labelr) +  ")";
//     })
//     .attr("dy", ".35em")
//     .attr("text-anchor", function(d) {
//         // are we past the center?
//         return (d.endAngle + d.startAngle)/2 > Math.PI ?
//             "end" : "start";
//     })
//     .text(function(d, i) { return d.value.toFixed(2); });

function tweenPie(b) {
    b.innerRadius = 0;
    var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
    return function(t) { return arc(i(t)); };
}

function tweenDonut(b) {
    b.innerRadius = radius * .6;
    var i = d3.interpolate({innerRadius: 0}, b);
    return function(t) { return arc(i(t)); };
}

