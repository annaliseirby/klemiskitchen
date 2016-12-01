/**
 * Created by kevin on 11/15/2016.
 */
$(function() {

    $.ajax({
        type: 'POST',
        url: '../../php/dashboard.php',
        success : function(data) {
            console.log(data);
            var jsonData = JSON.parse(data);
            $("#availableMeals").html(jsonData[0] == null ? 0 : jsonData[0] );
            $("#mealsTaken").html(jsonData[1] == null ? 0 : jsonData[1]);
            $("#expiredMeals").html(jsonData[2] == null ? 0 : jsonData[2]);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert('An error has occured! Please try resubmitting.');
            console.log(errorThrown);
        }
    });


    $("#activeUsers").html(120);
    createD3Pie([1,2,3,4,5,6]);
    function createD3Pie(data) {
        var width = document.getElementById("meat-chart").offsetWidth,
            height = 500,
            radius = Math.min(width, height) / 2 - 10;

        var data = data;

        var labels = ['Poultry', 'Pork', 'Beef', 'Fish', 'Multi-Meat', 'Veggie'];

        var color = d3.scale.category20();

        for (var i = 0; i < labels.length; i++) {
            try {
                document.getElementById(labels[i].toLowerCase()).style.backgroundColor = color(i);
            } catch (e) {
                console.log(e);
            }

        }

        var arc = d3.svg.arc()
            .outerRadius(radius);

        var pie = d3.layout.pie();

        var svg = d3.select("#meat-chart").append("svg")
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
    }

});

