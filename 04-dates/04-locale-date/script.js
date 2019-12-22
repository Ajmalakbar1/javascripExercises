/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here


//<p>Change the content of the indicated tag by the date of today, in English (ex : Sunday 28 October 2018, 23h32).</p>
function findDate() {

    //let gen = document.getElementById("target").innerHTML = new Date().toLocaleString();
    let getDay = new Date().getDay();
    let myDay;
   if (getDay == "0")
   {
       myDay ="Saturday";
   }else if(getDay == "1"){
       myDay ="Sunday";
   }else if(getDay=="2"){
       myDay="Monday";
    }else if(getDay=="3"){
       myDay="Tuesday";
    }else if(getDay=="4"){
       myDay="Wednesday";
   }else if(getDay=="5"){
       myDay="Thursday";
   }else if(getDay=="6"){
       myDay="Friday";
   }
   let myMonth;
   let getMonth = new Date().getMonth();

    if (getMonth=="0"){
        myMonth="January";
    }else if (getMonth=="1"){
        myMonth ="February";
    }else if(getMonth=="2"){
        myMonth="March";
    }else if (getMonth=="3"){
        myMonth="April"
    }else if (getMonth=="4"){
        myMonth="May";
    }else if (getMonth=="5"){
        myMonth="June";
    }else if (getMonth=="6"){
        myMonth="July";
    }else if (getMonth=="7"){
        myMonth="August";
    }else if (getMonth=="8"){
        myMonth="September";
    }else if (getMonth=="9"){
        myMonth="October";
    }else if (getMonth=="10"){
        myMonth="November";
    }else if (getMonth=="11"){
        myMonth="December";
    }



    document.getElementById("target").innerHTML = myDay+ " "+new Date().getDate()+" "+ myMonth+" "+  new Date().getFullYear()+", "+ new Date().getHours()+"h"+ new Date().getUTCMinutes();
}