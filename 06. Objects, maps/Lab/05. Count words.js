/**
 * Created by Vicky on 6/12/2017.
 */
function countWords(input) {
    let regex = /\w+/g;
    let words = input[0].match(regex);
    let wordCounts = {};
    for (let word of words) {
        if(Object.keys(wordCounts).includes(word)){
            wordCounts[word] += 1;
        } else {
            wordCounts[word] = 1;
        }
    }
    return JSON.stringify(wordCounts);
}
console.log(countWords(["Far too slow, you're far too slow."]));