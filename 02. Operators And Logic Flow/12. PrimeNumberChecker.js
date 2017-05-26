/**
 * Created by Vicky on 5/26/2017.
 */
function primeChecker(n) {
    let prime = true;
    let max = Math.ceil(Math.sqrt(n));
    for (let i = 2; i <= max; i++){
        if(n == i) continue;
        if(n%i == 0){
            prime = false;
            break;
        }
    }
    return prime && (n > 1);
}