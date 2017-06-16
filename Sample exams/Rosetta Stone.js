/**
 * Created by Vicky on 6/16/2017.
 */
function rosettaStone(input) {
    let templateLength = Number(input.shift());
    let templateMatrix = [];
    let encodedMatrix = [];
    for(let i=0; i<templateLength;i++){
        let line = input[i].split(' ').map(Number);
        templateMatrix.push(line);
    }

    for(let i = templateLength; i<input.length; i++){
        let line = input[i].split(' ').map(Number);
        encodedMatrix.push(line);
    }

    for (let row = 0; row<encodedMatrix.length; row+=templateLength){
        for(let col = 0; col<encodedMatrix[row].length; col+=templateMatrix[0].length){
            calculate(row, col, encodedMatrix);
        }
    }
    let result = '';
    for(let row = 0; row<encodedMatrix.length; row++){
        for(let col = 0; col<encodedMatrix[row].length; col++){
            result += encodedMatrix[row][col];
        }
    }
    console.log(result);


    function isInside(row, col, matrix) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length
    }

    function calculate(row1, col1, matrix) {
        for(let row = 0; row < templateMatrix.length; row++){
            for(let col = 0; col < templateMatrix[row].length; col ++){
                if(isInside(row1+row, col1+col, matrix)){
                    matrix[row1+row][col1+col] += templateMatrix[row][col];
                    matrix[row1+row][col1+col] = returnCharacter(matrix[row1+row][col1+col]);
                }
            }
        }
    }

    function returnCharacter(number) {
        let tableNumber = (number % 27) ;
        if(tableNumber === 0){
            return ' ';
        } else {
            return String.fromCharCode(tableNumber + 64);
        }
    }
}
rosettaStone([
    '1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14',
    ]
)