//variable stuff

if(document.getElementById("#001").style.display != 'block')
{
    document.getElementById(id).style.display = 'none';
};
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
         //ticket 3
                $('#003').on("swipe", function() {
                     $(this).hide(200);
       
        });
         //ticket 4
                $('#004').on("swipe", function() {
                     $(this).hide(200);
       
        });
         //ticket 5
                $('#005').on("swipe", function() {
                     $(this).hide(200);
       
        });
         //ticket 6
                $('#006').on("swipe", function() {
                     $(this).hide(200);
       
        });
    });
});
