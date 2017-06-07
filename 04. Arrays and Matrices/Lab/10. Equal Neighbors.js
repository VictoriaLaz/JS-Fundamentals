/**
 * Created by Vicky on 6/6/2017.
 */
function equalNeighbors(matrix) {
    sum = 0;
    for(let row = 0; row<matrix.length-1; row++){
        for(let col = 0; col<matrix[row].length ; col ++){
            if(matrix[row][col] == matrix[row+1][col]){
                sum++;
            }
        }
    }
    for(let row = 0; row<matrix.length; row++){
        for(let col = 0; col<matrix[row].length-1; col++){
            if(matrix[row][col] == matrix[row][col+1]){
                sum++;
            }
        }
    }

    return sum;
}
console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]

));;