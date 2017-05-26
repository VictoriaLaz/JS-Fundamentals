/**
 * Created by Vicky on 5/26/2017.
 */
function distance(input) {
    let distance = Math.sqrt(((input[0]-input[3])*(input[0]-input[3]))
        +((input[1]-input[4])*(input[1]-input[4]))
        +((input[2]-input[5])*(input[2]-input[5])));
    console.log(distance);
}