/**
 * Created by Vicky on 6/10/2017.
 */
function occurences(sentence, word) {
    let regex = new RegExp("\\b"+word + "\\b", "gi");
    if(sentence.match(regex)==null){
        return 0;
    }else {
        return sentence.match(regex).length;
    }


}
console.log(occurences('The waterfall was so high, that the child couldn’t see its peak.',
    'the'));
;