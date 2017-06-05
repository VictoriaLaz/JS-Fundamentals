/**
 * Created by Vicky on 6/5/2017.
 */
function modAverage(number) {
    while (true){
        if(isHigher(number)){
            break;
        } else{
            number = add9(number);
        }
    }
    console.log(number);

    function isHigher(number) {
        let sum = 0;
        for(let i = 0; i<number.length; i++){
            sum += Number(number[i]);
        }
        if(sum/number.length>5){
            return true;
        } else {
            return false;
        }
    }

    function add9(number) {
        number = String(number)+'9';
        return number;
    }
}
modAverage(101);