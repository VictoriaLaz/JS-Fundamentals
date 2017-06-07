/**
 * Created by Vicky on 6/7/2017.
 */
function print(arr) {
    let delimeter = Number(arr[arr.length-1]);
    arr.pop();
    let result = arr[0];
    for(let i = 1; i<arr.length; i++){
        result+=delimeter + arr[i];
    }
    return result;
}