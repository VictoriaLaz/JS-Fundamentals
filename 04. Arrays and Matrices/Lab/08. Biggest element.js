/**
 * Created by Vicky on 6/6/2017.
 */
function biggestElement(input) {
    let biggestNumber = Number.NEGATIVE_INFINITY;
    for(let row = 0; row < input.length; row++){
        for(let col = 0; col < input[row].length; col++){
            if(input[row][col] > biggestNumber){
                biggestNumber = input[row][col];
            }
        }
    }
    return biggestNumber;
}