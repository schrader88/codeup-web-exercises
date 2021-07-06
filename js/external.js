"use strict";

//alert("Hi, I am a JavaScript alert!");

//var userDecision = confirm("Are you sure you want to leave?");
//console.log(userDecision);
//
//if (userDecision === true) {
//    alert("Wise choice!");
//} else {
//    alert("Oh no, your loss!");
//}

//prompt

//var currentSpeedInMph = 65;
//var plannedSpeedInMph = prompt("How fast do you plan to go in mph?");
//var distanceLeftInMiles = prompt("How many miles away are you from your destination?");
//var timeToDestinationAtCurrentSpeed = (distanceLeftInMiles/currentSpeedInMph) * 60;
//var timeToDestinationAtPlannedSpeed = (distanceLeftInMiles/plannedSpeedInMph) * 60;
//var timeGain = timeToDestinationAtCurrentSpeed - timeToDestinationAtPlannedSpeed;
//var minutesGained = Math.floor(timeGain);
//var seconds = Math.round((timeGain- minutesGained) * 60);
//console.log("If you drive at " + plannedSpeedInMph + " mph, you will arrive " + minutesGained + " minutes and " + seconds + " seconds earlier. Is it worth it?");

console.log("Hello from external JavaScript");

alert("Welcome to my Website!")

var favoriteColor = prompt("What is your favorite color?");
console.log("Wow! " + favoriteColor + " is my favorite color, too!");

var littleMermaid = prompt("How many days will you be renting The Little Mermaid?");
var brotherBear = prompt("How many days will you be renting Brother Bear?");
var hercules = prompt("How many days will you be renting Hercules?");
var rateToRent = 3;
var totalPriceOfRentals = ((littleMermaid * rateToRent) + (brotherBear * rateToRent) + (hercules * rateToRent))
alert("You will be paying " + totalPriceOfRentals + " dollars for your rentals.");

var googlePay = 400
var amazonPay = 380
var facebookPay = 350
var hoursWorkedGoogle = prompt("How many hours did you work with Google this week?");
var hoursWorkedAmazon = prompt("How many hours did you work with Amazon this week?");
var hoursWorkedFacebook = prompt("How many hours did you work with Facebook this week?");
var totalPayThisWeek = ((googlePay * hoursWorkedGoogle) + (amazonPay * hoursWorkedAmazon) + (facebookPay * hoursWorkedFacebook))
alert("You will be paid " + totalPayThisWeek + " dollars this week.")


var classFull = confirm("Is the class full? If so, click \'OK\'. If not, click \'Cancel\'.");
var scheduleConflict = confirm("Is there a scheduling conflict? If so, click \'OK\'. If not, click \'Cancel\'.");

if (classFull === true || scheduleConflict === true) {
    alert("Sorry you can't enroll.");
} else {
    alert("You are now enrolled!");
}

//var howManyItems = prompt("How many items do you have?");
//var areYouPremium = confirm("Are you a Premium member? If so, please click \'OK\'. If not, click \'Cancel\'.");
//var validOffer = confirm("Is the offer valid? If so, please click \'OK\'. If not, click \'Cancel\'.")
//if ((howManyItems <=2 || areYouPremium === false) && validOffer === false) {
//    alert("I'm sorry. We cannot apply this offer.");
//} else {
//    alert("Offer has been applied.");
//}

var howManyItems = prompt("How many items do you have?");
var areYouPremium = confirm("Are you a Premium member? If so, please click \'OK\'. If not, click \'Cancel\'.");
var validOffer = confirm("Is the offer valid? If so, please click \'OK\'. If not, click \'Cancel\'.")
if (!validOffer) {
    alert("I'm sorry. We cannot apply this offer.");
} else if((howManyItems <=2 || !areYouPremium)) {
    alert("I'm sorry. We cannot apply this offer.");
} else{
    alert("Offer has been applied.");
}