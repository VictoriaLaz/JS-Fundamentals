/**
 * Created by Vicky on 6/6/2017.
 */
function process(input) {
    let result = [];
    for(let i = 0; i<input.length; i++){
        if(input[i] < 0){
            result.unshift(input[i]);
        } else {
            result.push(input[i]);
        }
    }
    return result;
}