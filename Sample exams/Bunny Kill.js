/**
 * Created by Vicky on 6/14/2017.
 */
function bunnyKill(input) {
    let matrix = [];
    let snowballDamage = 0;
    let killedBunnies = 0;
    for (let i = 0; i<input.length-1; i++) {
        input[i] = input[i].split(' ');
        input[i] = input[i].map(Number);
        matrix.push(input[i]);
    }
    let coordinateTokens = input[input.length-1].split(' ');
    let coordinates = [];
    for (let coordinate of coordinateTokens) {
        coordinate = coordinate.split(',').map(Number);
        coordinates.push(coordinate);
    }
    for(let i = 0; i<coordinates.length ; i++){
        let row = coordinates[i][0];
        let col = coordinates[i][1];
        let bombDamage = matrix[row][col];
        if(bombDamage !== 0) {
            if(matrix[row][col+1]!== undefined) {
                matrix[row][col + 1] -= bombDamage;
            }
            if(matrix[row][col - 1]!== undefined) {
                matrix[row][col - 1] -= bombDamage;
            }
            if(matrix[row + 1][col]!== undefined) {
                matrix[row + 1][col] -= bombDamage;
            }
            matrix[row + 1][col + 1] -= bombDamage;
            matrix[row + 1][col - 1] -= bombDamage;
            matrix[row - 1][col] -= bombDamage;
            matrix[row - 1][col + 1] -= bombDamage;
            matrix[row - 1][col - 1] -= bombDamage;
        }
    }
    console.log(coordinates);
    console.log(matrix);

    function checkEnd() {
        
    }

}
bunnyKill([
    '10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0'
])