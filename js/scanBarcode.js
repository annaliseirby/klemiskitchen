/**
 * Created by kevin on 10/13/2016.
 */
$(document).ready(function () {

    //Array of total meals that we want to send to the database
    var totalMeals = [];

    //Update list on 'enter', aka after every barcode scan
    $('input').keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            //$("#inputBarcodes").submit();
            var entry = updateList(); //entry is an object with (name, barcode)
            $('#currentItems').append('<li class="list-group-item" barcode = ' + entry.barcode + '>' + entry.name + '</li>');
        }
    });

    //Remove button
    $( "#remove" ).click(function() {
        $('.active').remove();
    });

    //Submit button
    $( "#submit" ).click(function() {
        $( ".list-group li" ).each(function( index ) {
            console.log( index + ": " + $(this).text() );
        });
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

    //RETURNS AN OBJECT -> (STRING, BARCODE)
    function updateList() {
        var barcode = $("#barcodeText").val();

        //Start i at 5 because 0-5 is date. 6-18 are choices.
        var mealIngredients = "";
        if (barcode.charAt(6) === '1') {
            mealIngredients += ", Chicken";
        }
        if (barcode.charAt(7) === '1') {
            mealIngredients += ", Pork";
        }
        if (barcode.charAt(8) === '1') {
            mealIngredients += ", Fish";
        }
        if (barcode.charAt(9) === '1') {
            mealIngredients += ", Beef";
        }
        if (barcode.charAt(10) === '1') {
            mealIngredients += ", Bread";
        }
        if (barcode.charAt(11) === '1') {
            mealIngredients += ", Pasta";
        }
        if (barcode.charAt(12) === '1') {
            mealIngredients += ", Rice";
        }
        if (barcode.charAt(13) === '1') {
            mealIngredients += ", Potato";
        }
        if (barcode.charAt(14) === '1') {
            mealIngredients += ", Vegetable";
        }
        if (barcode.charAt(15) === '1') {
            mealIngredients += ", Fruit";
        }
        if (barcode.charAt(16) === '1') {
            mealIngredients += ", Sandwich";
        }
        if (barcode.charAt(17) === '1') {
            mealIngredients += ", SimplyToGo";
        }
        if (barcode.charAt(18) === '1') {
            mealIngredients += ", Dessert";
        }

        mealIngredients = mealIngredients.substr(2);

        //Creates the entry
        var mealEntry = {name: mealIngredients, barcode: barcode};

        //Clears contents of the form
        document.getElementById("inputBarcodes").reset();

        return mealEntry
    }
});