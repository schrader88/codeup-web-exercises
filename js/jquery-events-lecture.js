"use strict";

$(document).ready(function () {

    $("#clickMe").click(function(){
        alert("You clicked me!");
    });

    $("#clickMeToo").on("click", function (){
        alert("Yay, I got clicked too!");
    });

    // Double Click used below:

    // $("#clickMeToo").on("dblclick", function (){
    //     alert("Yay, I got clicked too!");
    // });

    // Hover is a shorthand for mouseeneter-mouseleave. Example below:

    // $(".simple-box").hover(
    //     function () {
    //         $(this).css("outline", "8px ridge rebeccapurple");
    //     } ,
    //     function () {
    //         $(this).css("outline", "none");
    //     }
    // )

    // addClass and removeClass:

    $(".simple-box").hover(
        function () {
            $(this).addClass("outline")
        } ,
        function () {
            $(this).removeClass("outline")
        }
    )

    $(".simple-box").mouseenter(function (){
        $(this).css("background-color", "hotpink");
    });
    $(".simple-box").mouseleave(function (){
        $(this).css("background-color", "white");
    });

    // $(document).keydown(function (){
    //     alert("Key Down!")
    // });

    $(document).keyup(function (){
        alert("Key Up!")
    });

    $("#create-an-element").click(function (){
        $(this).after('<button class="does-it-work">Try clicking me</button>');
    });

    // Code below will not work:

    // $(".does-it-work").click(function (){
    //     alert("YOU WISH THIS WOULD WORK, NERD!")
    // })

    // Both blocks of code below do the same thing. Creating functional dynamic buttons:

    // $(document).on("click", ".does-it-work", function (){
    //     alert("Now I can add an event listener to a dynamically created element.");
    // })

    $("#dynamic").on("click", ".does-it-work", function (){
        alert("Now I can add an event listener to a dynamically created element.");
    })

});