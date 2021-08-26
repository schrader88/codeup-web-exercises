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
        emailAccumulator.sort((a,b) => b.length -a.length)
        return emailAccumulator[0];
    } else {
        emailAccumulator.push(email.email);
        return emailAccumulator;
    }
}, []);

// Paris (Draco) solution:

// let longestEmail = users.reduce((a,b) => {
//     if (a.length < b.email.length) {
//         a = b.email
//     }
//     return a
// }, '')

// console.log(longestEmail);

let allNames = users.reduce((total, nextName, index, array) => {
    if (index === array.length - 1) {
        total.push(nextName.name);
        return `Your instructors are: ${total.join(", ")}.`;
    } else {
        total.push(nextName.name);
        return total;
    }
}, []);

// console.log(allNames);

// let languagesCounted = users.reduce((total, language, index, array) => {
//     total.push(language.languages);
//     return total;
// }, []);

let uniqueUserLanguages = users.reduce(function(accumulator, user){
    let languages = user.languages;
    for (let i = 0; i < languages.length; i++){
        if (!accumulator.includes(languages[i])){
            accumulator.push(languages[i]);
        }
    }
    return accumulator.sort();
}, []);
console.log(uniqueUserLanguages);