/**
 * Created by Vicky on 6/14/2017.
 */
function format([string]) {
    function solve([text]) {
        console.log(text
            .replace(/[ ]*([.,!?:;])[ ]*/g, (match, g1) => `${g1} `)
            .replace(/\. (?=[0-9])/g, (match) => `.`)
            .replace(/" *(.+?) *"/g, (match, g1) => `"${g1}"`)
            .replace(/([.,!?:;]) (?=[.,!?:;])/g, (match, g1) => g1));
    }
}