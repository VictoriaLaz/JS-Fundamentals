/**
 * Created by Vicky on 6/15/2017.
 */
function removeShapes(input) {
    let matrix = [];
    let sequelsToChange = [];
    for (let line of input) {
        line = Array.from(line);
        matrix.push(line);
    }
    for(let row = 1; row<matrix.length-1; row++){
        for(let col = 1; col<matrix[row].length-1; col++){
            if(isEqual(row, col, matrix)){
                sequelsToChange.push([row, col]);
            }
        }
    }
    console.log(sequelsToChange);
    console.log(matrix);
    function change(row, col, matrix) {
        matrix[row][col] = '';
        for(let i = row-1; i <=row +1; i+=2){
            for(let j = col-1; j <=col+1; j+=2){
                matrix[i][j] = '';
            }
        }
    }
    function isEqual(row, col, matrix) {
        let symbol = matrix[row][col].toLowerCase();
        for (let i = row - 1; i <= row + 1; i += 2) {
            for (let j = col - 1; j <= col + 1; j += 2) {
                if (isInside(i, j, matrix)) {
                    if (matrix[i][j].toLowerCase() === symbol) {
                        return true;
                    } else {
                        return false
                    }
                }
            }
        }
    }

    function isInside(row, col, matrix) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length
    }


}
removeShapes([
    'abnbjs',
    'xoBab',
    'Abmbh',
    'aabab',
    'ababvvvv',

])