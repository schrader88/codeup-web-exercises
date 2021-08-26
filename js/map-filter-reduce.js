"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeOrMore = users.filter(item => item.languages.length > 2);

// console.log(threeOrMore);

let emailAddresses = users.map(item => item.email)

// console.log(emailAddresses);

let totalYears = users.reduce((total, person, index, array) => {
    return total + person.yearsOfExperience / array.length;
}, 0);

// console.log(totalYears);

let longestEmail = users.reduce((emailAccumulator, email, index, emailsArray) => {
    if (index === emailsArray.length - 1) {
        emailAccumulator.push(email.email);
        // console.log(emailAccumulator);
        emailAccumulator.sort((a,b) => b.length -a.length)
        return emailAccumulator[0];
    } else {
        emailAccumulator.push(email.email);
        return emailAccumulator;
    }
}, []);

// console.log(longestEmail);

let allNames = users.reduce((total, nextName, index, array) => {
    total = total + nextName.name;
    if (index === array.length - 1){

    } else {
        return `Your Instructors are: ${total}, `;
    }
}, []);

// console.log(allNames);