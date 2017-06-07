/**
 * Created by Vicky on 6/7/2017.
 */
function createMatrix(rowLength, colLength) {
    let matrix = [];
    for(let i=0; i<rowLength; i++) {
        matrix[i] = new Array(colLength);
    }
    let number = 1;
    return matrix;
}

console.log(createMatrix(3, 3));