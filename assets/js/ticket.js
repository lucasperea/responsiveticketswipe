//variable stuff



//ticket swipe 

$(function() {
    $('.ticket').ready(function() {


        //ticket 1
        $('#001').on("swipe", function() {
            $(this).hide(200);
        });

        //ticket 2
        $('#002').on("swipe", function() {
            $(this).hide(200);
        });
    });
});

$(function(){
    $("body").removeClass('ui-overlay-a');
});

//jq playground