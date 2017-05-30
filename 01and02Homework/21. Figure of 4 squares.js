/**
 * Created by Vicky on 5/30/2017.
 */
function figure(n) {
    let line = '';
    if(n%2 == 0){
        for(let row = 1; row<= n-1; row++){
            if(row == 1 || row == n/2 || row == n-1){
                line += '+' + '-'.repeat(n-2) +'+'+'-'.repeat(n-2)+'+';
                console.log(line);
                line = '';
            } else {
                line += '|' + ' '.repeat(n-2) +'|'+' '.repeat(n-2)+'|';
                console.log(line);
                line = '';
            }
        }
    } else{
        for(let row = 1; row<= n; row++){
            if(row == 1 || row == (n+1)/2 || row == n){
                line += '+' + '-'.repeat(n-2) +'+'+'-'.repeat(n-2)+'+';
                console.log(line);
                line = '';
            } else {
                line += '|' + ' '.repeat(n-2) +'|'+' '.repeat(n-2)+'|';
                console.log(line);
                line = '';
            }
        }
    }
}
figure(7);