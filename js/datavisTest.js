/**
 * Created by kevin on 11/15/2016.
 */
$(function () {


    var piechart = document.getElementById('piechart');

    drawPieChart();

    function drawPieChart() {
        var pieData = {
            labels: [
                "Informational Flaws",
                "Very Low Risk Flaws",
                "Low Risk Flaws",
                "Medium Risk Flaws",
                "High Risk Flaws",
                "Very High Risk Flaws"
            ],
            datasets: [
                {
                    data: [
                        100, 50, 50, 50, 25
                    ],
                    backgroundColor: [
                        "#8dbd3e",
                        "#c9da2c",
                        "#ffcc33",
                        "#fd7333",
                        "#e61f25",
                        "#d92b85"],
                    hoverBackgroundColor: [
                        "#8dbd3e",
                        "#c9da2c",
                        "#ffcc33",
                        "#fd7333",
                        "#e61f25",
                        "#d92b85"],
                }]
        };

        //create the chart
        var myPieChart = new Chart(piechart, {
            type: 'doughnut',
            data: pieData,
            options: {
                animateScale: true,
                responsive: true,
                maintainAspectRatio: false
            }
        })
    }
});

