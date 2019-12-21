/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//(function (){

    // your code here
    // trying to find some

       // let diff_ms = Date.now() - dob.getTime();
       // let age_dt = new Date(diff_ms);

        //return Math.abs(age_dt.getUTCFullYear() - 1970);

    //alert(calcAge(new Date(1982, 11, 4)));

   // alert(calcAge(new Date(1962, 1, 1)));



//});
function calcAge ()
{
    let dobDate = new Date( document.getElementById("dob-year").value,document.getElementById("dob-month").value -1,document.getElementById("dob-day").value);
    let Datediff = Date.now() - dobDate.getTime();
    let agedt = new Date(Datediff);
    let agee = Math.abs(agedt.getUTCFullYear() - 1970);
    alert("Congratulation you are "+agee +" years old.");
}
