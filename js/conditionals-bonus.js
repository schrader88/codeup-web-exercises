"use strict";

// ================================= CONDITIONALS BONUSES
//
// Bonus 1
// Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
// - Catch any invalid inputs.
// - Write the logic using if/else ifs and then refactor using a switch case

function dayOfTheWeek(favDay) {
    if (favDay === "sunday") {

    } else if (favDay === "monday") {

    } else if (favDay === "tuesday") {

    } else if (favDay === "wednesday") {

    } else if (favDay === "thursday") {

    } else if (favDay === "friday") {

    } else if (favDay === "saturday") {

    } else {

    }
}

// function dayOfTheWeek(favDay) {
//     switch(favDay):
//         case("sunday"):
//
//         case("monday"):
//
//         case("tuesday"):
//
//         case("wednesday"):
//
//         case("thursday"):
//
//         case("friday"):
//
//         case("saturday"):
//
//         default:
//
// }

//     Bonus 2
// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
//     - refactor to use a ternary operator
//
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