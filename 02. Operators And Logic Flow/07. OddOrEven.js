/**
 * Created by Vicky on 5/26/2017.
 */
function oddOrEven(n) {
    let reminder = n%2;
    if(reminder == 0){
        console.log('even');
    } else if(reminder == Math.round(reminder)){
        console.log('odd');
    } else{
        console.log('invalid');
    }

}