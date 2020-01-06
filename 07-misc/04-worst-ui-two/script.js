/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let a="";

        document.getElementById("part-one").addEventListener("click",function () {

    do {
        a = Math.floor(Math.random() * 480) + 2;
    }while(a<=400)
    document.getElementById("target").innerHTML = "0"+a;
})

    document.getElementById("part-two").addEventListener("click",myFunc);
    document.getElementById("part-three").addEventListener("click",myFunc);
    document.getElementById("part-four").addEventListener("click", myFunc);
    function myFunc(){
        let c =document.getElementById("target").innerText;
        if(c.length<10) {
            let b = "";
            do {
                b = Math.floor(Math.random() * 100) + 2;
            } while (b < 10)

            document.getElementById("target").innerHTML = c + b;
        }
    }

})();
