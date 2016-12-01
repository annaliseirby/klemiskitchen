/**
 * Created by kevin on 11/14/2016.
 */
$(function () {

    $.ajax({
        type: 'POST',
        url: '../../php/fullInventory.php',
        success : function(data) {
            //Data is returned as a string, so parse it into json.
            var jsonData = JSON.parse(data);

            //Create array to store formatted data
            var editedData = [];

            for (var i = 0; i < jsonData.length; i++) {
                //Push formatted data onto array
                var tempEntry = [
                    formatName(jsonData[i]),
                    jsonData[i].NumMeals,
                    //Formats the date using moment.js for better user experience ^_^
                    moment(jsonData[i].Date, 'YYYY-MM-DD').format("dddd, MMMM Do YYYY")
                ];
                editedData.push(tempEntry);
            }
            createTable(editedData);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert('An error has occured! Please try refreshing.');
            console.log(errorThrown);
        }
    });

    function formatName(data) {
        var mealIngredients = "";
        if (data.Poultry === "1") {
            mealIngredients += ", Chicken";
        }
        if (data.Pork === "1") {
            mealIngredients += ", Pork";
        }
        if (data.Fish === "1") {
            mealIngredients += ", Fish";
        }
        if (data.Beef === "1") {
            mealIngredients += ", Beef";
        }
        if (data.Bread === "1") {
            mealIngredients += ", Bread";
        }
        if (data.Pasta === "1") {
            mealIngredients += ", Pasta";
        }
        if (data.Rice === "1") {
            mealIngredients += ", Rice";
        }
        if (data.Potato === "1") {
            mealIngredients += ", Potato";
        }
        if (data.Vegetable === "1") {
            mealIngredients += ", Vegetable";
        }
        if (data.Fruit === "1") {
            mealIngredients += ", Fruit";
        }
        if (data.Sandwhich === "1") {
            mealIngredients += ", Sandwich";
        }
        if (data.SimplyToGo === "1") {
            mealIngredients += ", SimplyToGo";
        }
        if (data.Dessert === "1") {
            mealIngredients += ", Dessert";
        }

        mealIngredients = mealIngredients.substr(2);

        return mealIngredients;
    }

    function createTable(data) {
        $('#inventoryTable').DataTable({
            data: data,
            columns : [
                {title : "Name"},
                {title : "Number of Meals"},
                {title : "Date Added"}
            ]
        });
    }
});