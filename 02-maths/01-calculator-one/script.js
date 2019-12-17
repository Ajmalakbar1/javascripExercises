/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    var firstOperand;
    var secondoperand;
    document.getElementById("addition").addEventListener("click", function() {
    var firstOperand = document.getElementById("op-one").value;
    var secondOperand = document.getElementById("op-two").value;



        var sum = parseInt(firstOperand) + parseInt(secondOperand);

        alert(sum);

        document.getElementById("op-one").value = "";
        document.getElementById("op-two").value = "";

    });

    document.getElementById("substraction").addEventListener("click", function() {
        var firstOperand = document.getElementById("op-one").value;
        var secondOperand = document.getElementById("op-two").value;



        var sum = parseInt(firstOperand) - parseInt(secondOperand);

        alert(sum);

        document.getElementById("op-one").value = "";
        document.getElementById("op-two").value = "";

        // perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        var firstOperand = document.getElementById("op-one").value;
        var secondOperand = document.getElementById("op-two").value;



        var sum = parseInt(firstOperand) * parseInt(secondOperand);

        alert(sum);

        document.getElementById("op-one").value = "";
        document.getElementById("op-two").value = "";

        // perform an multiplication
    });

    document.getElementById("division").addEventListener("click", function() {
        var firstOperand = document.getElementById("op-one").value;
        var secondOperand = document.getElementById("op-two").value;



        var sum = parseInt(firstOperand) / parseInt(secondOperand);

        alert(sum);

        document.getElementById("op-one").value = "";
        document.getElementById("op-two").value = "";

        // perform an division
    });
})();
