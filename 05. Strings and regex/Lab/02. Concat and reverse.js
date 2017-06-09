/**
 * Created by Vicky on 6/9/2017.
 */
function concatAndReverse(input) {
    let concatString = '';
    for (let str of input){
        concatString+= str;
    }
    let reverseString='';
    for(let i=concatString.length-1; i>=0; i--) {
        reverseString += concatString[i];
    }
    return reverseString;
}

function concatAndReverse2(input) {
    let result = input.join('');
    result = Array.from(result).reverse().join('');
    return result
}
console.log(concatAndReverse2(["I", "am", "Vicky"]));;