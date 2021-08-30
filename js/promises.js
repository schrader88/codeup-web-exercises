"use strict";

function lastPushEvent(username) {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'token' + GITHUB_API_TOKEN}})
        .then(response => response.json())
        .then(response => response[0].created_at)
        .then(console.log)
        .catch(console.error)
}

lastPushEvent("schrader88");