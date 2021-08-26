"use strict";

// Array Iteration Methods = methods that operate on every time inside an array.

// Map, filter, reduce do NOT alter/mutate the original array. (does not mutate the array)
// either create a new array from the old one, OR generate a value based on the old array

let output = "";
let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99]

prices.forEach((item) => {
    // console.log(item);
    output += `<p>${item}</p>`;
});
$("#output").html(output);