/**
 * Created by Vicky on 6/12/2017.
 */
function turnToHTML(input) {
    let scores = JSON.parse(input);
    let output = '<table>\n  <tr>';
    for (let key of Object.keys(scores[0])) {
        output += `<th>${htmlEscape(key)}</th>`
    }
    output+='</tr>\n'
    for (let obj of scores) {
        output += '  <tr>';
        for(let key of Object.keys(scores[0]))
        output+=`<td>${htmlEscape(obj[htmlEscape(key)])}</td>`;
        output += '</tr>\n';

    }
    output+='</table>';

    return output;
    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return (''+text).replace(/[\"&'<>]/g, ch => map[ch]);
    }


}
console.log(turnToHTML('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'));