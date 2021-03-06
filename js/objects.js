(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // var person = {
    //     firstName: "Kyle",
    //     lastName: "Schrader",
    // }
    //
    // console.log(person.firstName);
    // console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // var person = {
    //     firstName: "Kyle",
    //     lastName: "Schrader",
    //     sayHello: (function(){
    //         console.log("Hello from " + this.firstName + " " + this.lastName)
    //     }),
    // }
    //
    // person.sayHello();

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    // shoppers.forEach(function (shopper){
    //     console.log("The current shopper is: " + shopper.name);
    //     console.log("The amount before possible discount is: $" + shopper.amount);
    //
    //     if (shopper.amount > 200) {
    //         console.log(shopper.name + " has spent over $200 and will now receive a 12% discount." + shopper.name + " will owe $" + (shopper.amount - (shopper.amount *.12)) + ".");
    //     } else {
    //         console.log("I'm sorry, you DO NOT qualify for a discount! " + shopper.name + " will owe $" + shopper.amount + ".");
    //     }
    //
    // });

    // Justin's Example. (Refactoring for Objects Lecture)

    // shoppers.forEach(function (shopper) {
    //     var discountedAmount = calculateDiscount(shopper.amount, discountThreshold, discountPercentage);
    //     var output = shopper.name + ' is purchasing ' + shopper.amount +
    //         ' of stuff. He will get ' + discountedAmount +
    //         ' off the purchase and pay ' +
    //         (shopper.amount - discountedAmount) + '.';
    //     console.log(output);
    // });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // var books = [
    //     {
    //         title: "In Search of Lost Time",
    //         author: {
    //             firstName: "Marcel" ,
    //             lastName: "Proust",
    //         }
    //     } ,
    //     {
    //         title: "Ulysses",
    //         author: {
    //             firstName: "James",
    //             lastName: "Joyce",
    //         }
    //     } ,
    //     {
    //         title: "One Hundred Years of Solitude",
    //         author: {
    //             firstName: "Gabriel",
    //             lastName: "Marquez",
    //         }
    //     } ,
    //     {
    //         title: "The Great Gatsby",
    //         author: {
    //             firstName: "F. Scott",
    //             lastName: "Fitzgerald",
    //         }
    //     } ,
    //     {
    //         title: "Love Does",
    //         author: {
    //             firstName: "Bob",
    //             lastName: "Goff",
    //         }
    //     }
    // ];

    // console.log(books[1].title);
    // console.log(books[1].author.firstName);
    // console.log(books[1].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // var books = [
    //     {
    //         title: "In Search of Lost Time",
    //         author: {
    //             firstName: "Marcel" ,
    //             lastName: "Proust",
    //         }
    //     } ,
    //     {
    //         title: "Ulysses",
    //         author: {
    //             firstName: "James",
    //             lastName: "Joyce",
    //         }
    //     } ,
    //     {
    //         title: "One Hundred Years of Solitude",
    //         author: {
    //             firstName: "Gabriel",
    //             lastName: "Marquez",
    //         }
    //     } ,
    //     {
    //         title: "The Great Gatsby",
    //         author: {
    //             firstName: "F. Scott",
    //             lastName: "Fitzgerald",
    //         }
    //     } ,
    //     {
    //         title: "Love Does",
    //         author: {
    //             firstName: "Bob",
    //             lastName: "Goff",
    //         }
    //     }
    // ];
    //
    // books.forEach(function (book, index){
    //     console.log("Book # " + (++index));
    //     console.log("Title: " + book.title);
    //     console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    //     console.log("--");
    // });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

//     var books = {
//         inSearch: {
//             title: "In Search of Lost Time",
//             author: {
//                 firstName: "Marcel",
//                 lastName: "Proust",
//             }
//         },
//         ulysses: {
//             title: "Ulysses",
//             author: {
//                 firstName: "James",
//                 lastName: "Joyce",
//             }
//         },
//         oneHundred: {
//             title: "One Hundred Years of Solitude",
//             author: {
//                 firstName: "Gabriel",
//                 lastName: "Marquez",
//             }
//         },
//         greatGatsby: {
//             title: "The Great Gatsby",
//             author: {
//                 firstName: "F. Scott",
//                 lastName: "Fitzgerald",
//             }
//         },
//         loveDoes: {
//             title: "Love Does",
//             author: {
//                 firstName: "Bob",
//                 lastName: "Goff",
//             }
//         }
//     }
//
//     var bookController = {
//         findMyBook: function createBook(bookTitle){
//             var userBook = bookTitle.title;
//             var userAuthor = bookTitle.author.firstName + " " + bookTitle.author.lastName;
//             bookViewer.showUserBookChoice(userBook, userAuthor);
//         }
// }
//
//     var bookViewer = {
//         showUserBookChoice: function(userBookTitle, authorFirstAndLast) {
//             console.log("The book you chose is: " + userBookTitle);
//             console.log("The author of " + userBookTitle + " is " + authorFirstAndLast + ".");
//         }
//     }
//
//     bookController.findMyBook(books.inSearch);
//     bookController.findMyBook(books.oneHundred);
//     bookController.findMyBook(books.greatGatsby);
//     bookController.findMyBook(books.loveDoes);
//     bookController.findMyBook(books.ulysses);



})();
