$(".dbl-click-box").dblclick(function (){
    alert("BOX DOUBLE-CLICKED!");
});

// Second Problem:

$("#dark-mode-btn").click(function () {
    $("body").toggleClass("dark-mode")
});

// Third Problem:

$("#uppercase").hover(
    function (){
        $("#lowercase").html("this is a title")
    }, function (){
        $("#lowercase").html("")
    });

// Fourth Problem:


setInterval(function (){
    var displayedNumber = parseFloat($("#counter").html());
    $("#counter").html(displayedNumber + 1);
}, 1000);


// Fifth Problem:

$(document).ready(function (){
    $("#list-chars-btn").click(function (e){
        e.preventDefault();
        var arrOfChars = $("#characters").val().split("");
        arrOfChars.forEach(function (character){
            $("#characters-list").append("<li>" + character + "</li>");
        });
    });
});

// Sixth Problem:

$("#clean-animal-list-btn").click(function (){
    $(".animal-list-item").each(function (){
        var sentence = $(this).next().html()
        var animal = $(this).html()
        $(this).next().html(sentence + animal);
        $(this).remove();
    });
});

// Seventh Problem:

$(".hidden-letters").children().hover(
    function (){
        $(this).children().css("visibility", "visible");
    },
    function (){
        $(this).children().css("visibility", "hidden");
    });

// $(".hidden-letters").children().each(function() {
// $(this).hover(function () {
//         $(this).children().css('visibility', 'visible');
//     },
//     function () {
//         $(this).children().first().css('visibility', 'hidden');
//     });
//
// });