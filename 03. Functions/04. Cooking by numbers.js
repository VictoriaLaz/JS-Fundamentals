/**
 * Created by Vicky on 6/5/2017.
 */
function cook(input) {
    let number = input[0];
    for(let i = 1; i<input.length; i++){
        console.log(operate(number, input[i]));
        number = operate(number, input[i]);
    }
    function operate(number, operation) {
        switch (operation){
            case 'chop': return number/2;
            case 'dice': return Math.sqrt(number);
            case 'spice': return number+1;
            case 'bake': return number*3;
            case 'fillet': return number - number*0.2;
        }
    }

}
