$(document).ready(function(){
    $("h4").hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "lightgray");
    });
});