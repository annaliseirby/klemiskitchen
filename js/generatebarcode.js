/**
 * Created by kevin on 10/2/2016.
 */
// Shorthand for $( document ).ready(). This ensures that the JS only runs after page loads
$(function() {

    $("#submit").click(function () {
        var date = new Date().toISOString().substr(0, 10);
        var barcode = "" + date + "-";

        if ($('#Poultry').is(':checked')) {
            console.log("Checked!");
            barcode += "1";
        } else {
            barcode += "0";
        }

        if ($('#Pork').is(':checked')) {
            console.log("Checked!");
            barcode += "1";
        } else {
            barcode += "0";
        }

        if ($('#Fish').is(':checked')) {
            console.log("Checked!");
            barcode += "1";
        } else {
            barcode += "0";
        }

        if ($('#Beef').is(':checked')) {
            console.log("Checked!");
            barcode += "1";
        } else {
            barcode += "0";
        }

        if ($('#Bread').is(':checked')) {
            console.log("Checked!");
            barcode += "1";
        } else {
            barcode += "0";
        }

        if ($('#Pasta').is(':checked')) {
            console.log("Checked!");
            barcode += "1";
        } else {
            barcode += "0";
        }

        if ($('#Rice').is(':checked')) {
            console.log("Checked!");
            barcode += "1";
        } else {
            barcode += "0";
        }

        if ($('#Potato').is(':checked')) {
            console.log("Checked!");
            barcode += "1";
        } else {
            barcode += "0";
        }

        if ($('#Vegetable').is(':checked')) {
            console.log("Checked!");
            barcode += "1";
        } else {
            barcode += "0";
        }

        if ($('#Fruit').is(':checked')) {
            console.log("Checked!");
            barcode += "1";
        } else {
            barcode += "0";
        }

        if ($('#Sandwich').is(':checked')) {
            console.log("Checked!");
            barcode += "1";
        } else {
            barcode += "0";
        }

        if ($('#SimplyToGo').is(':checked')) {
            console.log("Checked!");
            barcode += "1";
        } else {
            barcode += "0";
        }

        if ($('#Dessert').is(':checked')) {
            console.log("Checked!");
            barcode += "1";
        } else {
            barcode += "0";
        }


        JsBarcode("#barcode", barcode, {
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
        //var img = canvas.toDataURL("image/jpeg");

        var doc = {
            pageMargins: [10, 40, 10, 40],

            content: [
                { table: {
                    body: [
                        [ { image: 'barcode', width: 182, height: 70}, {image: 'barcode', width: 182, height: 70}, {image: 'barcode', width: 182, height: 70}],
                        [ { image: 'barcode', width: 182, height: 70}, {image: 'barcode', width: 182, height: 70}, {image: 'barcode', width: 182, height: 70}],
                        [ { image: 'barcode', width: 182, height: 70}, {image: 'barcode', width: 182, height: 70}, {image: 'barcode', width: 182, height: 70}],
                        [ { image: 'barcode', width: 182, height: 70}, {image: 'barcode', width: 182, height: 70}, {image: 'barcode', width: 182, height: 70}],
                        [ { image: 'barcode', width: 182, height: 70}, {image: 'barcode', width: 182, height: 70}, {image: 'barcode', width: 182, height: 70}],
                        [ { image: 'barcode', width: 182, height: 70}, {image: 'barcode', width: 182, height: 70}, {image: 'barcode', width: 182, height: 70}],
                        [ { image: 'barcode', width: 182, height: 70}, {image: 'barcode', width: 182, height: 70}, {image: 'barcode', width: 182, height: 70}],
                        [ { image: 'barcode', width: 182, height: 70}, {image: 'barcode', width: 182, height: 70}, {image: 'barcode', width: 182, height: 70}],
                        [ { image: 'barcode', width: 182, height: 70}, {image: 'barcode', width: 182, height: 70}, {image: 'barcode', width: 182, height: 70}],
                        [ { image: 'barcode', width: 182, height: 70}, {image: 'barcode', width: 182, height: 70}, {image: 'barcode', width: 182, height: 70}],
                    ]
            },
                layout: {
                    hLineWidth: function(i, node) { return 0; },
                    vLineWidth: function(i, node) { return 0; },
                    paddingLeft: function(i, node) { return 7; },
                    paddingRight: function(i, node) { return 7; },
                    paddingTop: function(i, node) { return 0; },
                    paddingBottom: function(i, node) { return 2; }
                }
            },
        ],

            images: {
                barcode: canvas.toDataURL("image/jpeg"),
            }

        }

        pdfMake.createPdf(doc).open();

    })

});