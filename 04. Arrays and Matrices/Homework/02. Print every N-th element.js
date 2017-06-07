/**
 * Created by Vicky on 6/7/2017.
 */
function printNElement(arr) {
    let step = Number(arr[arr.length-1]);
    arr.pop();
    for(let i = 0; i<arr.length; i+=step){
        console.log(arr[i]);
    }
}