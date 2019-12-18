/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function BtnClick(x) {
    let fn = parseInt(document.getElementById("op-one").value);
    let sn = parseInt(document.getElementById("op-two").value);

    switch (x) {
        case "addition":
        alert(fn + sn);
        break;
        case "subtraction":
        alert(fn - sn);
        break;
        case "multiplication":
        alert(fn * sn);
        break;
        case "division":
        alert(fn / sn);
        break;

    }
}

(function() {
    return true;
})();
