/**
 * Created by Vicky on 5/30/2017.
 */
function quadraticEquation(a, b, c) {
    let discriminant = Math.pow(b, 2) - 4*a*c;
    if(discriminant > 0){
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(Math.min(x1, x2));
        console.log(Math.max(x1, x2));
    } else if(discriminant == 0){
        console.log(-b / (2 * a));
    } else {
        console.log('No');
    }

}