/**
 * Created by Vicky on 6/10/2017.
 */
function replace(input) {
    let nameRegex = /\*[A-Z][A-Za-z]*(?=\s|$)/g;
    let phoneRegex = /\+[\d\-]{10}(?=\s|$)/g;
    let idRegex = /![A-Za-z0-9]+(?=\s|$)/g;
    let baseRegex = /_[A-Za-z0-9]+(?=\s|$)/g;

    for (let sentence of input) {
        console.log(sentence = sentence.replace(nameRegex, replaceWord)
            .replace(phoneRegex, replaceWord)
            .replace(idRegex, replaceWord)
            .replace(baseRegex, replaceWord))

    }


    function replaceWord(input) {
        return input.replace(input, ('|').repeat(input.length));
    }
}