/**
 * Created by Vicky on 6/10/2017.
 */
function captureNumbers(input) {
    let regex = /\d+/g;
    console.log(input.join(' ').match(regex).join(' '));
}