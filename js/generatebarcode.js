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
        } else {
            barcode += "0";
        }

        JsBarcode("#barcode", barcode, {
            lineColor: "#0aa",
        });

        //Enable Save button
        $("#save").removeAttr("disabled");

    })

});

//PDFs happen

$(function() {

    $("#save").attr('disabled', 'disabled');

    $("#save").click(function () {
        var canvas = document.getElementById("barcode");
        var img = canvas.toDataURL("image/png");

        var doc = { content: [
            { table: {
                body: [
                    [ { image: 'barcode', width: 173, height: 75}, {image: 'barcode', width: 173, height: 75}, {image: 'barcode', width: 173, height: 75}],
                    [ { image: 'barcode', width: 173, height: 75}, {image: 'barcode', width: 173, height: 75}, {image: 'barcode', width: 173, height: 75}],
                    [ { image: 'barcode', width: 173, height: 75}, {image: 'barcode', width: 173, height: 75}, {image: 'barcode', width: 173, height: 75}],
                    [ { image: 'barcode', width: 173, height: 75}, {image: 'barcode', width: 173, height: 75}, {image: 'barcode', width: 173, height: 75}],
                    [ { image: 'barcode', width: 173, height: 75}, {image: 'barcode', width: 173, height: 75}, {image: 'barcode', width: 173, height: 75}],
                    [ { image: 'barcode', width: 173, height: 75}, {image: 'barcode', width: 173, height: 75}, {image: 'barcode', width: 173, height: 75}],
                    [ { image: 'barcode', width: 173, height: 75}, {image: 'barcode', width: 173, height: 75}, {image: 'barcode', width: 173, height: 75}],
                    [ { image: 'barcode', width: 173, height: 75}, {image: 'barcode', width: 173, height: 75}, {image: 'barcode', width: 173, height: 75}],
                    [ { image: 'barcode', width: 173, height: 75}, {image: 'barcode', width: 173, height: 75}, {image: 'barcode', width: 173, height: 75}],
                    [ { image: 'barcode', width: 173, height: 75}, {image: 'barcode', width: 173, height: 75}, {image: 'barcode', width: 173, height: 75}],
                ]
            },
                layout: {
                    hLineWidth: function(i, node) { return 0; },
                    vLineWidth: function(i, node) { return 0; },
                    paddingLeft: function(i, node) { return 0; },
                    paddingRight: function(i, node) { return 0; },
                    paddingTop: function(i, node) { return 0; },
                    paddingBottom: function(i, node) { return 0; }
                }
            },
        ],

            images: {
                barcode: canvas.toDataURL("image/png")
            }

        }

        pdfMake.createPdf(doc).open();

    })

});