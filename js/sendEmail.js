/**
 * Created by kevin on 11/11/2016.
 */
$(function () {
    $("#friendSubmit").click(function () {
        var friendEmail = $("#friendEmail").val();
        var friendMessage = $("#friendComment").val();

        //console.log(friendEmail + "\n" + friendMessage);

        $.ajax({
            type: 'POST',
            url: '../php/sendEmail.php',
            data: {
                email: friendEmail,
                message: friendMessage
            },
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