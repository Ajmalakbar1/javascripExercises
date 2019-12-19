/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    var greeting;

    var hour = new Date().getHours();
    var minute  =new Date().getMinutes();

    if (hour <= 17 && minute <= 30) {
        greeting = "Hello world"}

    else if (hour >= 18 && minute >=30) {
        greeting = "Good evening"}

    else {
        greeting = "Hello world"
    }

    document.getElementById("target").innerHTML = greeting;
})();

//changed the hours and  minutes...