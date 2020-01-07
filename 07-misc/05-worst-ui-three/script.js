/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let a="";

    document.getElementById("fix-part-one").addEventListener("click",function () {

        do {
            a = Math.floor(Math.random() * 480) + 2;
        }while(a<=400)
        document.getElementById("target").innerHTML = "0"+a;
        document.getElementById("part-one").value = "0"+a;
        document.getElementById("part-two").value = "00";
        document.getElementById("part-three").value = "00";
        document.getElementById("part-four").value = "00";
    })

    document.getElementById("fix-part-two").addEventListener("click",myFunc);
    document.getElementById("fix-part-three").addEventListener("click",myFunc2);
    document.getElementById("fix-part-four").addEventListener("click", myFunc3);
    function myFunc(){
        let c =document.getElementById("target").innerText;
        if(c.length<10) {
            let b = "";
            do {
                b = Math.floor(Math.random() * 100) + 2;
            } while (b < 10)

            document.getElementById("target").innerHTML = c + b;
            document.getElementById("part-two").value = b;
        }
    }
    function myFunc2(){
        let c =document.getElementById("target").innerText;
        if(c.length<10) {
            let b = "";
            do {
                b = Math.floor(Math.random() * 100) + 2;
            } while (b < 10)

            document.getElementById("target").innerHTML = c + b;
            document.getElementById("part-three").value = b;
        }
    }
    function myFunc3(){
        let c =document.getElementById("target").innerText;
        if(c.length<10) {
            let b = "";
            do {
                b = Math.floor(Math.random() * 100) + 2;
            } while (b < 10)

            document.getElementById("target").innerHTML = c + b;
            document.getElementById("part-four").value = b;
        }
    }


})();
