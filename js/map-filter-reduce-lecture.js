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


const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

// const mileages = cars.map((car) => {return car.mileage});
// const mileages = cars.map((car) => car.mileage);

// let output = "";
// mileages.forEach((item) => output += `<p>${item}</p>`);
// $("#output").html(output);