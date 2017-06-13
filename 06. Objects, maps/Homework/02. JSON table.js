/**
 * Created by Vicky on 6/13/2017.
 */
function makeTable(input) {
    let result = '<table>\n'
    for (let line of input) {
        line = JSON.parse(line);
        result += '<tr>\n';
        result+=`<td>${htmlEscape(line['name'])}</td>\n<td>${htmlEscape(line['position'])}</td>\n<td>${line['salary']}</td>\n`;
        result +='<tr>\n';
    }
    result +='</table>';
    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return (''+text).replace(/[\"&'<>]/g, ch => map[ch]);
    }
    return result;
}
console.log(makeTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}',
]));