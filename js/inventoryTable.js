/**
 * Created by kevin on 11/14/2016.
 */
$(function () {

    function convertString(data) {
        return data == '0' ? 'No' : 'Yes';
    }
    
    $('#inventoryTable').DataTable({
        "ajax": {
            "url": "../../php/fullInventory.php",
            "dataSrc":''
        },
        "searching" : false,
        "columns": [
            {"data": "Date"},
            {"data": "Pork",
                render : function(data) {
                    return data == '0' ? 'No' : 'Yes';
                }
            },
            {"data": "Poultry",
                render : function(data) {
                    return data == '0' ? 'No' : 'Yes';
                }
            },
            {"data": "Fish",
                render : function(data) {
                    return data == '0' ? 'No' : 'Yes';
                }
            },
            {"data": "Beef",
                render : function(data) {
                    return data == '0' ? 'No' : 'Yes';
                }
            },
            {"data": "Bread",
                render : function(data) {
                    return data == '0' ? 'No' : 'Yes';
                }
            },
            {"data": "Pasta",
                render : function(data) {
                    return data == '0' ? 'No' : 'Yes';
                }
            },
            {"data": "Rice",
                render : function(data) {
                    return data == '0' ? 'No' : 'Yes';
                }
            },
            {"data": "Potato",
                render : function(data) {
                    return data == '0' ? 'No' : 'Yes';
                }
            },
            {"data": "Vegetable",
                render : function(data) {
                    return data == '0' ? 'No' : 'Yes';
                }
            },
            {"data": "Fruit",
                render : function(data) {
                    return data == '0' ? 'No' : 'Yes';
                }
            },
            {"data": "Sandwhich",
                render : function(data) {
                    return data == '0' ? 'No' : 'Yes';
                }
            },
            {"data": "SimplyToGo",
                render : function(data) {
                    return data == '0' ? 'No' : 'Yes';
                }
            },
            {"data": "Dessert",
                render : function(data) {
                    return data == '0' ? 'No' : 'Yes';
                }
            },
            {"data": "NumMeals"}
        ]
    });

});