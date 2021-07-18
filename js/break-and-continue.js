


var userOddNumber = prompt("Please enter an ODD number between 1 and 50:");

console.log("Number to skip is: " + userOddNumber);

for (i = 1; i <= 49; i = i + 2) {

    if (userOddNumber % 2 === 0) {
        alert("That is an even number. Please enter an ODD number.");
        break;
    } else if (userOddNumber == i) {
        console.log("Yikes! Skipping number: " + i);
        continue;
    }

    console.log("Here is an odd number: " + i);
}






