/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//(function() {
//document.getElementById("target").addEventListener("load",function () {
function myFunc(){
    let Len = document.getElementById("target").innerText.length;
    let txt = document.getElementById("target").innerText;
    let res ="";
    let i;
    for(i=0;i <= Len;){
        let b = txt.charAt(i);
        res +=b.fontsize(1+i);
        i++;
    }
    document.getElementById("target").innerHTML=res;
}
//})();
