/**
 * Created by kevin on 11/15/2016.
 */
$(function () {


    var piechart = document.getElementById('piechart');

    drawPieChart();

    function drawPieChart() {
        var pieData = {
            labels: [
                " Poultry",
                " Pork",
                " Beef",
                " Fish",
                " More than 2 Meats",
                " No Meat"
            ],
            datasets: [
                {
                    data: [
                        100, 50, 50, 50, 25, 10
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

