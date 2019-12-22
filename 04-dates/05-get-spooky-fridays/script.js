/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//(function() {

    // your code here

//})();
function myFunction(){

    let y = document.getElementById("year").value;
    let d = "13";
    let str;
    let str1;

    for(let i =1; i <=12;){

        let md =new Date(y+"/"+i+"/"+d);

        if(new Date(md).getDay() == 5){


            if(md.getUTCMonth()==0){
                str1 ="January";
            }else if(md.getUTCMonth()==1){
                str1 ="February";
            }else if(md.getUTCMonth()==2){
                str1 ="March";
            }else if(md.getUTCMonth()==3){
                str1 ="April";
            }else if(md.getUTCMonth()==4){
                str1 ="May";
            }else if(md.getUTCMonth()==5){
                str1 ="June";
            }else if(md.getUTCMonth()==6){
                str1 ="July";
            }else if(md.getUTCMonth()==7){
                str1 ="August";
            }else if(md.getUTCMonth()==8){
                str1 ="September";
            }else if(md.getUTCMonth()==9){
                str1 ="October";
            }else if(md.getUTCMonth()==10){
                str1 ="November";
            }else if(md.getUTCMonth()==11){
                str1 ="December";
            }

            document.getElementById("demo").innerHTML +=str1+" ";
        }


        i++;

    }

}