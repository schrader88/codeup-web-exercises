"use strict";


var number = 1;
while (number < 65000) {
    number *= 2;
    console.log(number);
}


var allCones = Math.floor(Math.random() * 50) + 50;

console.log("We have " + allCones + " for sale.");

do {
    var purchaseAttempt = Math.floor(Math.random() * 5) + 1;

    if (purchaseAttempt <= allCones) {
        allCones = (allCones - purchaseAttempt);
        console.log("You bought " + purchaseAttempt + " cone(s). There are " + allCones + " cone(s) left!");
    } else {
        console.log("Shoot! We don't have " + purchaseAttempt + " cone(s). We have " + allCones + " cone(s) left.");
    }

} while (allCones > 0);

console.log("Yay! We sold them all!");

