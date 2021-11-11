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

// Create a function that takes voltage and current and returns the calculated power.

function circuitPower(voltage, current) {
    return voltage * current;
}

console.log(circuitPower(230, 10));
console.log(circuitPower(110, 3));
console.log(circuitPower(480, 20));

// circuitPower(230, 10) ➞ 2300
// circuitPower(110, 3) ➞ 330
// circuitPower(480, 20) ➞ 9600

// Write a function that converts hours into seconds.

function howManySeconds(number) {
    return (number * 60) * 60;
}

console.log(howManySeconds(2));
console.log(howManySeconds(10));
console.log(howManySeconds(24));

// howManySeconds(2) ➞ 7200
// howManySeconds(10) ➞ 36000
// howManySeconds(24) ➞ 86400

// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

function nextEdge(num1, num2) {
    return (num1 + num2) - 1;
}

console.log(nextEdge(8, 10));
console.log(nextEdge(5, 7));
console.log(nextEdge(9, 2));

// nextEdge(8, 10) ➞ 17
// nextEdge(5, 7) ➞ 11
// nextEdge(9, 2) ➞ 10

// Write a function where: Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function remainder(num1, num2) {
    return num1 % num2
}

console.log(remainder(1, 3));
console.log(remainder(3, 4));
console.log(remainder(-9, 45));
console.log(remainder(5, 5));

// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0

// Create a function that takes length and width and finds the perimeter of a rectangle.

function findPerimeter(num1, num2) {
    return (num1 + num2) * 2;
}

console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10));
console.log(findPerimeter(2, 9));

// findPerimeter(6, 7) ➞ 26
// findPerimeter(20, 10) ➞ 60
// findPerimeter(2, 9) ➞ 22

// Write a function that returns the string "something" joined with a space " " and the given argument a.

function giveMeSomething(str) {
    return "something " + str;
}

console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("something"));

// giveMeSomething("is better than nothing") ➞ "something is better than nothing"
// giveMeSomething("Bob Jane") ➞ "something Bob Jane"
// giveMeSomething("something") ➞ "something something"

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(number) {
    var accumulator = 0;
    for (var i = 1; i <= number; i++) {
        accumulator += i;
    }
    return accumulator;
}

console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));

// addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300

// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(userArr) {
    return [Math.min(...userArr), Math.max(...userArr)];
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));

// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]

// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function points(twos, threes) {
    return (twos * 2) + (threes * 3);
}

console.log(points(1, 1));
console.log(points(7, 5));
console.log(points(38, 8));

// points(1, 1) ➞ 5
// points(7, 5) ➞ 29
// points(38, 8) ➞ 100

// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

function nameString(name) {
    return name + "Edabit";
}

console.log(nameString("Mubashir"));
console.log(nameString("Matt"));
console.log(nameString("javascript"));

// nameString("Mubashir") ➞ "MubashirEdabit"
// nameString("Matt") ➞ "MattEdabit"
// nameString("javaScript") ➞ "javaScriptEdabit"

// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

function profitableGamble(prob, prize, pay) {
    return (prob * prize) > pay;
}

console.log(profitableGamble(0.2, 50, 9));
console.log(profitableGamble(.9, 1, 2));
console.log(profitableGamble(.9, 3, 2));

// profitableGamble(0.2, 50, 9) ➞ true
// profitableGamble(0.9, 1, 2) ➞ false
// profitableGamble(0.9, 3, 2) ➞ true

// Create a function which returns the number of true values there are in an array.

function countTrue(userArr) {
    let accumulator = 0;
    userArr.forEach(function(arr) {
        if (arr === true) {
            accumulator += 1;
        }
    });
    return accumulator;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));

// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0


// COME BACK AND REFACTOR ======================================= THIS IS UGLY


// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

function keysAndValues(userObj) {
    return "[" + Object.keys(userObj) + "]" + " , " + "[" + Object.values(userObj) + "]";
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));

// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]
//
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
//
// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

function arrayOfMultiples(num, length) {
    let accArr = [];
    for (let i = 1; i <= length; i++) {
        let newNum = num * i;
        accArr.push(newNum);
    }
    return accArr;
}

console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));

// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

// Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.

function areaOfCountry(name, area) {
    let perc = (area/148940000) * 100;
    return name + " is " + perc.toFixed(2) + "% of the world's landmass."
}

console.log(areaOfCountry("Russia", 17098242));
console.log(areaOfCountry("USA", 9372610));
console.log(areaOfCountry("Iran", 1648195));

// areaOfCountry("Russia", 17098242) ➞ "Russia is 11.48% of the total world's landmass"
// areaOfCountry("USA", 9372610), "USA is 6.29% of the total world's landmass"
// areaOfCountry("Iran", 1648195) ➞ "Iran is 1.11% of the total world's landmass"

// Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

function calculator(numOne, sign, numTwo) {
    if (sign === "*") {
        return numOne * numTwo;
    } else if (sign === "+") {
        return numTwo + numTwo;
    } else if (sign === "/") {
        return numOne / numTwo;
    } else if (sign === "-") {
        return numOne - numTwo;
    }
}

console.log(calculator(2, "+", 2));
console.log(calculator(2, "*", 2));
console.log(calculator(4, "/", 2));

// calculator(2, "+", 2) ➞ 4
// calculator(2, "*", 2) ➞ 4
// calculator(4, "/", 2) ➞ 2

