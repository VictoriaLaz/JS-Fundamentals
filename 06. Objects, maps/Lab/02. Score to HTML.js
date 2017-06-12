/**
 * Created by Vicky on 6/12/2017.
 */
function turnToHTML(input) {
    let scores = JSON.parse(input);
    let output = '<table>\n<tr><th>name</th><th>score</th></tr>\n';
    for (let obj of scores) {

        output+=`<tr><td>${htmlEscape(obj['name'])}</td><td>${htmlEscape(obj['score'])}</td></tr>\n`

    }
    output+='</table>';

    return output;
    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return (''+text).replace(/[\"&'<>]/g, ch => map[ch]);
    }


}
console.log(turnToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]'));