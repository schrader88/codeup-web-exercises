"use strict";

// fetch(`https://api.github.com/users`, {headers: {'Authorization': GITHUB_API_TOKEN}});

function lastPushEvent(username) {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'token' + GITHUB_API_TOKEN}})
        .then(response => response.json())
        .then(response => response[0].created_at)
        .catch(console.error)
}

console.log(lastPushEvent("schrader88"));
