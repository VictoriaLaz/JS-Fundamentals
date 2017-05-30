/**
 * Created by Vicky on 5/30/2017.
 */
function multiplicationTable(n) {
    "use strict";
    console.log('<table border="1">');
    let firstRow = '<tr><th>x</th>';
    for(let i = 1; i<=n; i++){
        firstRow += `<th>${i}</th>`;
    }
    firstRow+='</tr>'
    console.log(firstRow);
    for(let row = 1; row<=n; row++){
        let string = `<tr><th>${row}</th>`;
        for(let col = 1; col<=n; col++){
            string +=`<td>${row*col}</td>`
        }
        string += '</tr>';
        console.log(string);
        string = '';
    }
    console.log('</table>');
}
multiplicationTable(5)