/**
 * Created by kevin on 10/13/2016.
 */
$(document).ready(function () {
    $('#inputBarcodes').on('submit', function(e) {
        e.preventDefault();

        var barcodes = $("#barcodeText").val().split('\n'); //gets input as an array of each line
        for (var i = 0; i < barcodes.length; i++) { //loops through each line
            var date = barcodes[i].substr(0, 5); //isolates the date
            var data = barcodes[i].substr(6);
            var item = {date: date, data: data};
            barcodes[i] = item;
        }

        console.log(barcodes);

        document.getElementById("inputBarcodes").reset();
        $.ajax({
            type: 'POST',
            url: '../php/barcode.php',
            data: barcodes,
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