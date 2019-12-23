/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function () {
        let numbers = [];

        for ( let i=1; i<11; i++ ){
            let randomNumber = Math.floor(Math.random() * 100);
            //console.log(randomNumber);

            numbers.push(randomNumber);
            //console.log(numbers);

            document.getElementById("n-"+i).innerHTML = numbers[i-1];
            //console.log("n-"+i)

        }

        console.log(numbers);

        const arrMin = Math.min(...numbers);
        console.log(arrMin);

        document.getElementById("min").innerHTML = arrMin;
        console.log("min");

        const arrMax = Math.max(...numbers);
        console.log(arrMax);

        document.getElementById("max").innerHTML = arrMax;
        console.log("max");

        const arrSum = numbers.reduce((totalValue,inputValue) => totalValue + inputValue, 0);
        console.log(arrSum);
        document.getElementById("sum").innerHTML = arrSum;

        const arrAvg = arrSum / numbers.length;
        document.getElementById("average").innerHTML = arrAvg;

    })

})();



        // let uno = document.getElementById("n-1").innerHTML = Math.floor(Math.random()*100)+1;


