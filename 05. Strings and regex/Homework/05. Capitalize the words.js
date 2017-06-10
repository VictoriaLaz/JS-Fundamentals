/**
 * Created by Vicky on 6/10/2017.
 */
function capitalize(string) {
    let words = string.split(' ');
    let newWords = [];
    for (let word of words) {
        word = Array.from(word);
        word[0]=word[0].toUpperCase();
        for(let i = 1; i<word.length; i++){
            word[i] = word[i].toLowerCase();
        }
        word = word.join('');
        newWords.push(word);
    }
    return newWords.join(' ');
}
console.log(capitalize('Was that Easy? tRY thIs onE for SiZe!'));;