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
        // $.ajax({
        //     type: 'POST',
        //     url: 'http://chenjonathan-cornucopia.herokuapp.com/api/recipe',
        //     data: {
        //         name: values.recipeName,
        //         author: values.authorName,
        //         instructions: values.instructions,
        //         rating: 0,
        //         ingredients: values.ingredients,
        //     },
        // });
        // $('#myModal').modal('hide');
        // return false;
    });
});