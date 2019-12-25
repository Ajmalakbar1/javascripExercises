/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    // your code here
    document.getElementById("target").addEventListener("load", myFunc());
        function myFunc(){
        let body = document.getElementsByTagName('body')[0];
        let tbl = document.createElement('table');
        tbl.style.width = '10%';
        tbl.setAttribute('border', '1');
        let tbdy = document.createElement('tbody');
        for (let i = 0; i < 10; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < 1; j++) {
                if (i == 2 && j == 1) {
                    break
                } else {
                    let td = document.createElement('td');
                    td.appendChild(document.createTextNode('\u0020'))
                    i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
                    tr.appendChild(td)
                }
            }
            tbdy.appendChild(tr);
        }
        tbl.appendChild(tbdy);
        body.appendChild(tbl)

    }
