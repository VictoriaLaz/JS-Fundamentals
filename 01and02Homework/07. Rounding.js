/**
 * Created by Vicky on 5/27/2017.
 */
function round(input) {
    let number = input[0];
    let precision = input[1];
    if (precision > 15){
        precision = 15;
    }
    let denominator = Math.pow(10,precision);
    let roundedNumber = Math.round(number*denominator)/denominator;
    return roundedNumber;
}