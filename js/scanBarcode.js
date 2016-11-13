/**
 * Created by kevin on 10/13/2016.
 */
$(document).ready(function () {


    $('input').keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#inputBarcodes").submit();
        }
    });



    $('#inputBarcodes').on('submit', function(e) {
        e.preventDefault();

        //THIS CURRENTLY MAKES A CALL ON EVERY "ENTER" FIX THIS LATER
        var barcode = $("#barcodeText").val();
        $('#currentItems').append('<li class="list-group-item">' + barcode + '</li>');

        var date = barcode.substr(0, 5); //isolates the date
        var data = barcode.substr(6);
        var item = {date: date, data: data};

        //console.log(barcodes);

        //Clears contents of the form
        document.getElementById("inputBarcodes").reset();

        $.ajax({
            type: 'POST',
            url: '../../php/barcode.php',
            data: item,
            success : function(data) {
                console.log(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert('An error has occured! Please try resubmitting.');
                console.log(errorThrown);
            }
        });

    });
});