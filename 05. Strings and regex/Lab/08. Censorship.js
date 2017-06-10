/**
 * Created by Vicky on 6/9/2017.
 */
function censorship(text, words) {
    for (let word of words) {
        let replacement = '-'.repeat(word.length);
        while (text.indexOf(word)> -1){
            text = text.replace(word, replacement);
        }
    }
    return text;
}

console.log(censorship('roses are red, violets are blue', [', violets are', 'red']));;