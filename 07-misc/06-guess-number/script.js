/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementsByTagName("body")[0].onload=function () {
        myFunc()
};
    function myFunc() {
        let inpt;
        let msg ="Guess a number between 1 to 100 ";
        let ran;
        do {
            inpt = prompt(msg,);
             ran = Math.floor(Math.random() * 100) + 2;
             msg="";
             if(Number(inpt) > ran){
                 msg = "Oops...Higher! Guess another Number";
             }else{
                 msg = "Oops...lower! Guess another Number";
             }
        }while(Number(inpt)!=ran)
        alert("Congratulation! You guessed the right number. " + ran);
    }
})();
