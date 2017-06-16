/**
 * Created by Vicky on 6/15/2017.
 */
function spyMaster(input) {
    let regexStr = '((\\s|^)[';
    let key = input.shift();
    for (let ch of key) {
        regexStr += ch.toLowerCase();
        regexStr += ch.toUpperCase();
    }
    regexStr += `]{${key.length}})(\\s+[A-Z\\!%\$#]{8,})(?=\\.|\\s|,|$)`;
    let messageRegex = new RegExp(`${regexStr}`, 'g');
    for(let i = 0; i<input.length; i++){
        let matches = input[i].match(messageRegex);

        if(matches !== null){
            let line = input[i].replace(messageRegex, (match, gr1, gr2, gr3) => gr1 + replacement(gr3));
            console.log(line);
        } else {
            console.log(input[i]);
        }
    }
    function replacement(gr3) {
        let map = { '!': '1', '%': '2',
            "#": '3', '$': '4'};
        gr3 = gr3.replace(/[!%#$]/g, ch => map[ch]);
        return gr3.replace(/[A-Z]/g, ch => ch.toLowerCase());
    }
}
spyMaster([
    'secret',
    'Random text with secrets EVERYWHERE',
    'secret HEREHERE and one secret OVERTHEREANDEVERYWHERE',
    'secret SECRETTIME, and secret KINDATHERE.',
    'secret ONELINER',
    'and maybe secret FALSESE or secret TRUESECRET or secret ENDONCOMA,',
    'here are three secrets one secret OVERHERE, one secret OVERTHERE and one secret DISSAPPOINT',
])