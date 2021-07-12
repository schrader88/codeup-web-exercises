"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

//function analyzeColor(colorName) {
//    if (colorName === "blue"){
//        return ("The sky is blue.");
//    } else if (colorName === "red"){
//        return("Red is the color of blood.");
//    } else if (colorName === "cyan"){
//        return ("I don't know anything about cyan.")
//    } else {
//        return ("That is not a color I know.");
//    }
//}

//console.log(analyzeColor("blue"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

//function analyzeColor(colorName){
//    switch(colorName) {
//        case("blue"):
//            return ("The sky is blue.");
//        case("red"):
//            return ("Red is the color of blood.");
//        case("cyan"):
//            return ("I don't know anything about cyan.");
//        default:
//            return ("That is not a color I know.");
//    }
//}

//console.log(analyzeColor("blue"));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

//var usersColor = prompt("Choose a color and enter it here:");

//function analyzeColor(colorName){
//    switch(colorName) {
//        case("blue"):
//            alert("The sky is blue.");
//            break;
//        case("red"):
//            alert("Red is the color of blood.");
//            break;
//        case("cyan"):
//            alert("I don't know anything about cyan.");
//            break;
//        default:
//            alert("That is not a color I know.");
//            break;
//    }
//}

//analyzeColor(usersColor);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

//function calculateTotal(userNumber, totalAmount) {
//    if (userNumber == 0) {
//        return (totalAmount).toFixed(2);
//    } else if (userNumber == 1){
//        return (totalAmount * (.90)).toFixed(2);
//    } else if (userNumber == 2){
//        return (totalAmount * (.75)).toFixed(2);
//    } else if (userNumber == 3){
//        return (totalAmount * (.65)).toFixed(2);
//    } else if (userNumber == 4) {
//        return (totalAmount * (.50)).toFixed(2);
//    } else if (userNumber == 5) {
//        return (parseFloat(totalAmount) - parseFloat(totalAmount)).toFixed(2);
//    } else {
//        return ("That lucky number is invalid. There will be no discount. Your total will be $" + totalAmount.toFixed(2) + ".");
//    }
//
//}

//console.log(calculateTotal(5, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

//Generate a random number between 0 and 6
//var luckyNumber = Math.floor(Math.random() * 6);

//var billTotal = prompt("What is your total bill?");

//function calculateTotal(userNumber, totalAmount) {
//    if (userNumber == 0) {
//        return (totalAmount);
//    } else if (userNumber == 1){
//        return (totalAmount * (.90)).toFixed(2);
//    } else if (userNumber == 2){
//        return (totalAmount * (.75)).toFixed(2);
//    } else if (userNumber == 3){
//        return (totalAmount * (.65)).toFixed(2);
//    } else if (userNumber == 4) {
//        return (totalAmount * (.50)).toFixed(2);
//    } else if (userNumber == 5) {
//        return (parseFloat(totalAmount) - parseFloat(totalAmount)).toFixed(2);
//    } else {
//        return ("That lucky number is invalid. There will be no discount. Your total will be $" + totalAmount.toFixed(2) + ".");
//    }
//}

//alert("Your lucky number is " + luckyNumber + "!");
//alert("Your price before the discount was: $" + billTotal + ".");
//alert("Your final price, after the discount, is: $" + calculateTotal(luckyNumber, billTotal) + ".");

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


//  function isNumeric(inputFromPrompt) {
//     return !isNaN(inputFromPrompt);
// }
//
//  if (confirm("Would you like to enter a number?")) {
//     var userInput = parseFloat(prompt("Enter a number:"));
//
//     if (isNumeric(userInput)) {
//         if (userInput % 2 === 0) {
//             alert("That number is even!");
//         } else if (userInput % 2 === 1) {
//             alert("That number is odd!");
//         }
//
//         if (userInput > 0) {
//             alert("That number is positive.");
//         } else if (userInput < 0) {
//             alert("That number is negative.");
//         }
//
//         alert("Your number added to 100 is: " + (100 + userInput) + ".");
//     } else {
//         alert("Oops! That input is not a number!");
//     }
//  }

// Refactoring below with Functions //

function isNumeric(inputFromPrompt) {
   return !isNaN(inputFromPrompt);
}

function isPositiveOrNegative(userNumber) {
   if (userNumber > 0) {
       return alert("That number is positive.");
   } else if (userNumber < 0) {
       return alert("That number is negative.");
   }
}

function isOddOrEven(userNumber) {
   if (userNumber % 2 === 0) {
       return alert("That number is even!");
   } else if (userNumber % 2 === 1) {
       return alert("That number is odd!");
   }
}

function numberPlusHundred(userNumber) {
   if (!isNaN(userNumber)) {
       alert("Your number added to 100 is: " + (100 + userInput) + ".");
   }
}


if (confirm("Would you like to enter a number?")) {
   var userInput = parseFloat(prompt("Enter a number:"));

   if (isNumeric(userInput)) {
       (isOddOrEven(userInput));
       (isPositiveOrNegative(userInput));
       (numberPlusHundred(userInput));
   } else {
       alert("Oops! That input is not a number!");
   }
}


