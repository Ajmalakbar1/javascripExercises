/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let i=0;
    let txt = document.getElementById("target").innerText;
    let speed = 80;
    // the speed of text...
    document.getElementById("target").innerHTML="";

    function typewriter() {
        if(i < txt.length) {
            document.getElementById("target").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typewriter,speed);

        }
    }
    typewriter();




})();
