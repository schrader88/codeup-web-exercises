// Create a function that takes two numbers as arguments and return their sum.

function addition(num1, num2) {
    return num1 + num2;
}

console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));

// addition(3, 2) ➞ 5
// addition(-3, -6) ➞ -9
// addition(7, 3) ➞ 10

// Write a function that takes an integer minutes and converts it to seconds.

function convert(number) {
    return number * 60;
}

console.log(convert(5));
console.log(convert(3));
console.log(convert(2));

// convert(5) ➞ 300
// convert(3) ➞ 180
// convert(2) ➞ 120

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function plusOne(number) {
    return ++number;
}

console.log(plusOne(0));
console.log(plusOne(9));
console.log(plusOne(-3));

// plusOne(0) ➞ 1
// plusOne(9) ➞ 10
// plusOne(-3) ➞ -2

// Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {
    return (base * height)/2;
}

console.log(triArea(3, 2))
console.log(triArea(7, 4))
console.log(triArea(10, 10))

// triArea(3, 2) ➞ 3
// triArea(7, 4) ➞ 14
// triArea(10, 10) ➞ 50

// Create a function that takes the age in years and returns the age in days.

function calcAge(age) {
    return age * 365;
}

console.log(calcAge(65));
console.log(calcAge(0));
console.log(calcAge(20));

// calcAge(65) ➞ 23725
// calcAge(0) ➞ 0
// calcAge(20) ➞ 7300

// Create a function that takes in a number and cubes it

function cubes(number) {
    return (number * number) * number;
}

console.log(cubes(3));
console.log(cubes(5));
console.log(cubes(10));

// cubes(3) ➞ 27
// cubes(5) ➞ 125
// cubes(10) ➞ 1000

// Create a function that takes an array containing only numbers and return the first element.

function getFirstValue(userArr) {
    return userArr[0];
}

console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));

// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500