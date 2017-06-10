/**
 * Created by Vicky on 6/9/2017.
 */
function matchTheWords(input){
    "use strict";
    let regex = /\w+/g;
    console.log(input.match(regex).join('|'));
}

console.log(matchTheWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text'));