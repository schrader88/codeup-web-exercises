"use strict";

// Array Iteration Methods = methods that operate on every time inside an array.

// Map, filter, reduce do NOT alter/mutate the original array. (does not mutate the array)
// either create a new array from the old one, OR generate a value based on the old array

// let output = "";
// let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99]

// prices.forEach((item) => {
//     // console.log(item);
//     output += `<p>${item}</p>`;
// });
// $("#output").html(output);

// prices.forEach((item, index) => {
//     let tax = (item * 0.0825).toFixed(2);
//     let total = ((parseFloat(item)) + parseFloat(tax)).toFixed(2);
//     output += `<p>Item number ${index + 1}. Price: $${item}. Tax: $${tax}. Total: $${total}</p>`
// });
// $("#output").html(output);

// .map()

// let pricesAfterTax = [];

// let pricesAfterTax = prices.map((item) => {
//     let tax = (item * 0.0825).toFixed(2);
//     let total = ((parseFloat(item)) + parseFloat(tax)).toFixed(2);
//     return parseFloat(total);
// });

// pricesAfterTax.forEach((item) => {
//    output += `<p>${item}</p>`;
// });
// $("#output").html(output);

// let things = ["book", "pencil", "marker", "eraser"];
// var pluralThings = things.map(function(item){
//     item = item + 's';
//     return item;
// });

// let pluralThings = things.map((item) => `${item}s`);
// pluralThings.forEach((item, index) => {
//     if (index === 0) {
//         output = `<p>You must bring the following items: </p>`
//         output += `<p>${item}</p>`
//     } else {
//         output += `<p>${item}</p>`
//     }
// });
// $("#output").html(output);

// Below is the same as above, except in one line in the forEach:

// let pluralThings = things.map((item) => `${item}s`);
// let output = "";
// pluralThings.forEach((item, index)=> index === 0 ? output += `<p>You must bring the following items:</p><p>${item}</p>` : output += `<p>${item}</p>`);
// $("#output").html(output);


// const cars = [
//     {
//         make: "Honda",
//         model: "Civic",
//         mileage: 10428
//     },
//     {
//         make: "Toyota",
//         model: "Corolla",
//         mileage: 9425
//     },
//     {
//         make: "Ford",
//         model: "Mustang",
//         mileage: 2567
//     },
//     {
//         make: "Audi",
//         model: "A3",
//         mileage: 14500
//     },
//     {
//         make: "Mazda",
//         model: "3",
//         mileage: 11248
//     }
// ];

// const mileages = cars.map((car) => {return car.mileage});
// const mileages = cars.map((car) => car.mileage);

// let output = "";
// mileages.forEach((item) => output += `<p>${item}</p>`);
// $("#output").html(output);

// .filter()

// const under10k = cars.filter(car => car.mileage < 10000);

// Below is long-hand:

// const under10K = cars.filter(function (car) {
//     if (car.mileage < 10000) {
//         return true;
//     } else {
//         return false;
//     }
// });

// let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// let affordablesWithTax = prices.filter(price => price < 10).map(price => {
//     let tax = (price * 0.0825).toFixed(2);
//     let total = ((parseFloat(price)) + parseFloat(tax)).toFixed(2);
//     return parseFloat(total);
// });

// let output = "";
// affordablesWithTax.forEach(function (item){
//     output = output + "<p>" + item + "</p>";
//     $("#output").html(output);
// });

// .reduce()

// let totalCost = affordablesWithTax.reduce((total, indivItemCost) => total + indivItemCost)

// var totalCost = affordablesWithTax.reduce(function(total, itemPrice){
//    return total + itemPrice;
// });

// let totalCost = affordablesWithTax.reduce((total, indivItemCost, index) => {
//    console.log(`The index is ${index}, the total is ${total}, the itemCost is ${indivItemCost}`);
//    return total + indivItemCost;
// });

// let averagePrice = affordablesWithTax.reduce((total, indivItemCost, index, array) => {
//    total = total + indivItemCost;
//    if (index === array.length - 1) {
//        return total/array.length;
//    } else {
//        return total;
//    }
// });

// let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// var total = prices.reduce(function (total, price, index){
//     console.log(`The index is ${index}, the total is ${total}, the itemCost is ${price}`);
//     return total + price;
// }, 158.76);

const aesopAnimals = ["Ant", "Grasshopper", "Ape", "Fox", "Donkey", "Donkey", "Donkey", "Lion", "Fly", "Bear", "Beaver", "Blackbird", "Wolf", "Bull", "Lion", "Cat", "Mouse", "Crab", "Fox", "Rooster", "Rooster", "Dog", "Fox", "Crow", "Crow", "Sheep", "Crow", "Snake", "Deer", "Dog", "Dog", "Sheep", "Dog", "Wolf", "Dog", "Lion", "Dove", "Ant", "Eagle", "Fox", "Eagle", "Stork", "Viper", "Fish", "Fly", "Ant", "Fly", "Snake", "Fox", "Crow", "Fox", "Fox", "Lion", "Fox", "Fox", "Lion", "Fox", "Stork", "Fox", "Weasel", "Fox", "Fly", "Hedgehog", "Hare", "Frog", "Fox", "Frog", "Mouse", "Frog", "Ox", "Frog", "Frog", "Goat", "Goose", "Hare", "Horse", "Donkey", "Horse", "Kite", "Dove", "Lion", "Lion", "Lion", "Lion", "Bear", "Fox", "Lion", "Boar", "Vulture", "Dog", "Mouse", "Oyster", "Donkey", "Ox", "Kite", "Snake", "Crab", "Snake", "Snake", "Tortoise", "Tortoise", "Hare", "Cat", "Wolf", "Wolf", "Lamb", "Swallow", "Tortoise"];

// When total[animal] = 1, I create a key value pair: Ex: ant: 1.

// let aesopsAnimalsCounted = aesopAnimals.reduce((total, animal) => {
//     total[animal] = 1;
//     return total;
// }, {});

let aesopsAnimalsCounted = aesopAnimals.reduce((total, animal) => {
    if (!total[animal]) {
        total[animal] = 1;
    } else {
        total[animal] += 1;
    }
    return total;
}, {});