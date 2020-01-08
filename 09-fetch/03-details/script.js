/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", function(){

        fetch("http://localhost:12345/_shared/api.json")
            .then(response => response.json())
            .then(data => {
                let tem = document.getElementById("tpl-hero");
                let input = document.getElementById("hero-id").value;

                for (let i = 0; i <data.heroes.length ; i++){
                    if (input == data.heroes[i].id) {

                        let copy = tem.content.cloneNode(true);
                        copy.querySelector(".name").innerHTML = data.heroes[i].name;
                        copy.querySelector(".alter-ego").innerHTML = data.heroes[i].alterEgo;
                        copy.querySelector(".powers").innerHTML = data.heroes[i].abilities;
                        document.getElementById("target").appendChild(copy);
                    }

                }
            })
    });
})();
