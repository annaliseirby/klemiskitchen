/**
 * Created by kevin on 10/2/2016.
 */
// Shorthand for $( document ).ready(). This ensures that the JS only runs after page loads
$(function() {



    $("#submit").click(function () {
        var barcode = "Hello";

        if ($('#Option1').is(':checked')) {
            console.log("Checked!");
            barcode += "1";
        }

        JsBarcode("#barcode", barcode, {
            lineColor: "#0aa",
        });

    })

});
