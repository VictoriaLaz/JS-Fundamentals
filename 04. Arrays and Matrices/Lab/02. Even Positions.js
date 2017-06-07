/**
 * Created by Vicky on 6/6/2017.
 */
function even(input) {
    let arr2 = [];
    for(let i = 0; i<input.length; i+=2){
        arr2.push(input[i]);
    }
    console.log(arr2.join(' '));
}