/**
 * Created by kevin on 11/14/2016.
 */
$(function() {
    $.ajax({
        type: 'GET',
        url: '../../php/fullInventory.php',
        success : function(data) {
            console.log(data);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert('An error has occured! Please try resubmitting.');
            console.log(errorThrown);
        }
    });
});