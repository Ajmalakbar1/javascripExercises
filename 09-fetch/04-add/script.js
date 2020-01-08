/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function() {

        fetch("http://localhost:12345/api.json")
            .then(response => response.json())
            .then(data => {
                let heroNew1 = document.getElementById("hero-name").value;
                let heroNew2 = document.getElementById("hero-alter-ego").value;
                let heroNew3 = document.getElementById("hero-powers").value;
                let object6 = {"id":6, "name":heroNew1,"alterEgo":heroNew2,"abilities":[heroNew3]}
                data.heroes.push(object6);
                console.log(data);


            })
    });

})();
