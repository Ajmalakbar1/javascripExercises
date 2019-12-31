/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    document.getElementById("pass-one").addEventListener("keypress",function() {
        let myVal = document.getElementById("pass-one").value;

            let letters = new RegExp(".*[0-9].*[0-9]");
            if(myVal.length >= 8 && letters.test(myVal))
           {
                document.getElementById("validity").innerHTML="OK";
           }
            else
            {
                document.getElementById("validity").innerHTML="Not OK";
            }

    });

})();
