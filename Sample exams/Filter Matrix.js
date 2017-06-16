/**
 * Created by Vicky on 6/15/2017.
 */
function filter(input) {
    let sequenseLength = Number(input.pop());
    let matrix = [];
    for (let line of input) {
        line = line.split(' ').map(Number);
        matrix.push(line);
    }
    console.log(matrix);
    let previous
    for(let row = 0; row<matrix.length; row++){
        for(let col = 0; col<matrix[row].length; row++){

        }
    }

}
filter([
    '3 3 3 2 5 9 9 9 9 1 2',
    '1 1 1 1 1 2 5 8 1 1 7',
    '7 7 1 2 3 5 7 4 4 1 2',
    '2'])