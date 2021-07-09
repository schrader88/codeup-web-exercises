"use strict";

//var flavor = prompt("Welcome to Codeup Ice Cream! What flavor do you want?")

// if - if else - else

//if (flavor === "chocolate") {
//    alert("One chocolate coming right up!")
//} else if (flavor === "vanilla") {
//    alert("One vanilla coming right up!")
//} else if (flavor === "strawberry") {
//    alert("One strawberry coming right up!")
//} else {
//    alert("We do not have that flavor. Sorry!");
//}

// switch

//switch(flavor) {
//    case("chocolate"):
//        alert("One chocolate coming right up!");
//        break;
//    case("vanilla"):
//        alert("One vanilla coming right up!");
//        break;
//    case("strawberry"):
//        alert("One strawberry coming right up!");
//        break;
//    default:
//        alert("We do not have that flavor. Sorry!");
//}

//function getIceCreamOrder(flavor){
//    if (flavor === "chocolate" || flavor === "vanilla" || flavor === "strawberry"){
//        alert("One " + flavor + " coming right up!");
//    } else {
//        alert("We do not have that flavor. Sorry!");
//    }
//}

//getIceCreamOrder(flavor);

//var decision = confirm("Are you sure you want to close this page?");
//alert(decision);

//if (decision){
//    alert("OK, closing the page...");
//} else {
//    alert("Yay! Keeping page open...");
//}

// ternary operator (do not use unless you must)

//alert( (decision === true)? "OK, closing the page..." : "Yay! Keeping the page open...");

//var num = 7;

//if (num % 5 === 0){
//    alert("That number is divisible by 5!");
//} else {
//    alert("That number is not divisible by 5!");
//}

//function divisibleByFive(num) {
//    if (num % 5 === 0) {
//        alert("That number is divisible by 5!");
//    } else {
//        alert("That number is not divisible by 5!");
//    }
//}

//function divisibleByFive(num){
//    alert((num % 5 === 0)? "That number is divisible by 5!" : "That number is not divisible by 5!");
//}

// format used for assessment below. no alerts, no prompts, no confirm - just boolean responses.

//function isDivisibleByFive(num) {
//    if (num % 5 === 0) {
//        return true;
//    } else {
//        return false;
//    }
//}

// OR //

//function isDivisibleByFive(num){
//    return (num % 5 === 0);
//}

// typeof examples and explanation

//var email;

//if (typeof email === "undefined") {
//    alert("That's undefined!");
//} else {
//    alert("That's not undefined!");
//}

// BELOW IS A typeof EXAMPLE THAT WOULD WORK FOR ASSESSMENT

//function isUndefined(input) {
//    if (typeof input === "undefined") {
//        return true;
//    } else {
//        return false;
//    }
//}

//function alertMVPCustomer(totalPurchase) {
//    if (totalPurchase > 1000){
//        alert("We have an MVP customer.");
//    }
//}

//BELOW WOULD WORK FOR ASSESSMENT

//function alertMVPCustomer(totalPurchase) {
//    if (totalPurchase > 1000) {
//        return true;
//    } else {
//        return false;
//    }
//}

// OR //

//function alertMVPCustomer(totalPurchase) {
//    return totalPurchase > 1000;
//}

//var whatTheCustomerSpent = 1001;

//DON'T do this!
//Don't call a global variable from inside a function
//var isMVPCustomer = function(){
//    return whatTheCustomerSpent > 1000;
//}

// REMEMBER THAT THE FUNCTIONS IN THE ASSESSMENT NEED TO OUTPUT A BOOLEAN!!