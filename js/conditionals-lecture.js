"use strict";

var flavor = prompt("Welcome to Codeup Ice Cream! What flavor do you want?")

// if - if else - else

if (flavor === "chocolate") {
    alert("One chocolate coming right up!")
} else if (flavor === "vanilla") {
    alert("One vanilla coming right up!")
} else if (flavor === "strawberry") {
    alert("One strawberry coming right up!")
} else {
    alert("We do not have that flavor. Sorry!");
}

// switch

switch(flavor) {
    case("chocolate"):
        alert("One chocolate coming right up!");
        break;
    case("vanilla"):
        alert("One vanilla coming right up!");
        break;
    case("strawberry"):
        alert("One strawberry coming right up!");
        break;
    default:
        alert("We do not have that flavor. Sorry!");
}

