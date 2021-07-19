(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var planetsArray = planetsString.split("|");

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var secondPlanetsString = planetsArray.join("<br>");

    console.log(secondPlanetsString);

    // BONUS //

    var arrayToList = secondPlanetsString.split("<br>");

    var liTagsOfPlanets = arrayToList.join(" <li>");

    var secSplit = liTagsOfPlanets.split(" ");

    var joinSecSplit = secSplit.join("</li> ");

    var thirdSplit = joinSecSplit.split(" ");

    thirdSplit.unshift('<ul> <li>');

    thirdSplit.push('</li> </ul>');

    var finalJoin = thirdSplit.join('')

    console.log(finalJoin);



})();
