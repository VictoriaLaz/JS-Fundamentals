/**
 * Created by Vicky on 6/7/2017.
 */
function rotate(input) {
    let rotations = Number(input[input.length-1]);
    input.pop();
    for(let i = 0; i<=rotations - 1; i++){
        input.unshift(input.pop());
    }
    return input.join(" ");

}