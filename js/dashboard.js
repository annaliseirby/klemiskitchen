/**
 * Created by kevin on 11/15/2016.
 */
$(function() {

    $.ajax({
        type: 'POST',
        url: '../../php/dashboard.php',
        success : function(data) {
            //console.log(data);
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

});

