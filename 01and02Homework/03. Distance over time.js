/**
 * Created by Vicky on 5/26/2017.
 */
function distance(input) {
    let distance1 = input[0]*1000/3600*input[2];
    let distance2 = input[1]*1000/3600*input[2];
    console.log(Math.abs(distance1 - distance2));
}