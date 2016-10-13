/**
 * Created by kevin on 10/13/2016.
 */
$(document).ready(function () {
    $('#inputBarcodes').submit(function() {
        var barcodes = $("#barcodeText").val().split('\n'); //gets input as an array of each line
        for (var i = 0; i < barcodes.length; i++) { //loops through each line
            var date = barcodes[i].substr(0, 5); //isolates the date
            var data = barcodes[i].substr(6);
            var item = {date: date, data: data};
            barcodes[i] = item;
        }
        console.log(barcodes);

        $.ajax({
            type: 'POST',
            url: 'php/barcode.php',
            data: "1",
            success : function() {
                console.log('I worked');
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("some error");
            }
        });
    });
});