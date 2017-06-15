/**
 * Created by Vicky on 6/14/2017.
 */
function arithmephile(input) {
    let numbers = input.map(Number);
    let biggestProduct = -Infinity;

    for(let i = 0; i<numbers.length-1; i++){
        let number = numbers[i];
        if(number > 1 && number <10){
            let numbersToMultiply = numbers.slice(i+1, i+number+1);
            if(numbersToMultiply !== undefined) {
                let product = numbersToMultiply.reduce((a, b) => a * b);

                if (product > biggestProduct) {
                    biggestProduct = product;
                }
            }
        }
        if(number == 1){
            let product = numbers[i+1];
            if (product > biggestProduct) {
                biggestProduct = product;
            }
        }
    }
    return biggestProduct;
}
console.log(arithmephile([
    '18',
    '42',
    '19',
    '36',
    '1',
    '-297',
    '38',
    '100',
    '9',
    '-249',
    '-170',
    '-18',
    '-208',
    '-11',
    '-87',
    '-90',
    '-286',
    '-27']));;