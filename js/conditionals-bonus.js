"use strict";

// ================================= CONDITIONALS BONUSES
//
// Bonus 1
// Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
// - Catch any invalid inputs.
// - Write the logic using if/else ifs and then refactor using a switch case

// var dayPrompt = prompt("What is your favorite day of the week?");
//
// function dayOfTheWeek(favDay) {
//     if (favDay.toLowerCase() === "sunday") {
//         alert("Sunday fun-day!");
//     } else if (favDay.toLowerCase() === "monday") {
//         alert("I HATE Monday's! -Garfield");
//     } else if (favDay.toLowerCase() === "tuesday") {
//         alert("Tuesday? Almost hump day!");
//     } else if (favDay.toLowerCase() === "wednesday") {
//         alert("Guess what day it is? HUMP DAY!");
//     } else if (favDay.toLowerCase() === "thursday") {
//         alert("Thirsty Thursday!");
//     } else if (favDay.toLowerCase() === "friday") {
//         alert("TGIF!");
//     } else if (favDay.toLowerCase() === "saturday") {
//         alert("Saturday is for the boys!");
//     } else {
//         alert("I'm sorry! That is not a day of the week!");
//     }
// }
//
// dayOfTheWeek(dayPrompt);

// Refactor with switch statement //

// var dayPrompt = prompt("What is your favorite day of the week?");
//
// function dayOfTheWeek(favDay) {
//     switch (favDay.toLowerCase()) {
//         case("sunday"):
//             alert("Sunday fun-day!");
//             break;
//         case("monday"):
//             alert("I HATE Monday's! -Garfield");
//             break;
//         case("tuesday"):
//             alert("Tuesday? Almost hump day!");
//             break;
//         case("wednesday"):
//             alert("Guess what day it is? HUMP DAY!");
//             break;
//         case("thursday"):
//             alert("Thirsty Thursday!");
//             break;
//         case("friday"):
//             alert("TGIF!");
//             break;
//         case("saturday"):
//             alert("Saturday is for the boys!");
//         default:
//             alert("I'm sorry! That is not a day of the week!");
//     }
// }
//
// dayOfTheWeek(dayPrompt);

//     Bonus 2
// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
//     - refactor to use a ternary operator

// var enterNumber = parseFloat(prompt("Enter something here:"));
//
// function isThisANumber(input){
//     if (!isNaN(input)) {
//         alert("This input is a number!");
//     } else {
//         alert("This input is NOT a number");
//     }
// }
//
// isThisANumber(enterNumber);

// Refactor //

// var enterNumber = parseFloat(prompt("Enter something here:"));
//
// function isThisANumber(input) {
//     return (!isNaN(input) ? alert("This input is a number!") : alert("This input is NOT a number"));
// }
//
// isThisANumber(enterNumber);

// Bonus 3
// Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months
//
//
// GOLD STAR BONUS
//
// Create a distance unit conversion application.
//     Prompt the user for unit of measurement.
//     Prompt the user for a value.
//
//     Prompt the user for a second unit of measurement to convert to.
//
//     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
//
// Use these conversion functions to make the correct unit conversion
//
// Potentially, you will need a large switch case to account for the possible unit conversions,
//     i.e. what conversion functions will need to be called in and in what order.
//
//     DOUBLE GOLD STAR BONUS
//
//     Allow unit conversion to metric system units