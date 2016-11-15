/**
 * Created by kevin on 11/14/2016.
 */
$(function() {
    $.ajax({
        type: 'GET',
        url: '../../php/fullInventory.php',
        success : function(data) {
            drawTable(data);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert('An error has occured! Please try resubmitting.');
            console.log(errorThrown);
        }
    });

    function drawTable(data) {
        $('#inventoryTable').DataTable( {
            pageLength : 25,
            data: data,
            columns: [
                { data: "Date" },
                { data: "Pork" },
                { data: "Poultry" },
                { data: "Fish" },
                { data: "Beef" },
                { data: "Bread" },
                { data: "Pasta:" },
                { data: "Rice" },
                { data: "Potato" },
                { data: "Vegetable" },
                { data: "Fruit" },
                { data: "Sandwhich" },
                { data: "SimplyToGo" },
                { data: "Dessert" },
                { data: "NumMeals" }
            ]
        });
    }

});