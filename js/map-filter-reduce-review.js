"use strict";


// Array Squared Problem

const input = [1, 2, 3, 4, 5];
// We want [1, 4, 9, 16, 25];

const output = input.map(number => number**2);

// console.log(output);

// Sum of all POSITIVE element(s)

const input2 = [1, -4, 12, 0, -3, 29, -150];
// We want 42

const output2 = input2.filter(number => number >= 0).reduce((total, number) => total + number);

// console.log(output2);

