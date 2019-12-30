/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var hereAdd = '<table>';
    for (i = 1; i < 11; i++) {
        hereAdd += "<tr>";
        for (j = 1; j < 11; j++) {
            hereAdd += "<td>" + i + " x " + j + " = " + j * i + "</td>";
        }
        hereAdd +="</tr>";
    }
    hereAdd +="</table>";

document.getElementById("target").innerHTML =  hereAdd ;
})();
