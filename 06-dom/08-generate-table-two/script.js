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
document.getElementById("target").addEventListener("load",myFunction());
    function myFunction(){
    var i = 0;
    document.write('<table border="1" cellspacing="0" bgcolor="#ff7f50" id="Tabula">');
    for (i = 1; i < 11; i++) {
        document.write("<tr>");
        for (j = 1; j < 11; j++) {
            document.write("<td>" + i + " x " + j + " = " + j * i + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}
})();
