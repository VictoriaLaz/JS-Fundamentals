/**
 * Created by Vicky on 6/6/2017.
 */
function process(input) {
    let k = input[0];
    let firstK = [];
    let lastK = [];
    for (let i = 1; i <= k; i++){
        firstK.push(input[i]);
    }
    console.log(firstK.join(' '));
    for (let i = input.length - k; i<input.length; i++){
        lastK.push(input[i]);
    }
    console.log(lastK.join(' '));
}
process([3, 6, 7, 8, 9]);