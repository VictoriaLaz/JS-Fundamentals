/**
 * Created by Vicky on 6/7/2017.
 */
function isMagic(matrix) {
    let sum = 0;
    sum = matrix[0].reduce((a, b)=>a+b);
    if(checkRows(matrix)&&checkCols(matrix)){
        return 'true';
    } else{
        return'false';
    }
    function checkRows(matrix) {
        for(let row = 1; row<matrix.length; row++){
            if((matrix[row]).reduce((a,b)=>a+b) != sum){
                return false;
            }else {
                return true;
            }
        }
    }
    function checkCols(matrix) {
        let colSum = 0;
        let row = 0;
        for(let col = 0; col<matrix[row].length; row++) {
            for (row = 0; col < matrix.length; col++) {
                colSum+=matrix[row][col];
            }
            if (colSum != sum){
                return false;
            }
        }
        return true;
    }

}
console.log(isMagic([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));