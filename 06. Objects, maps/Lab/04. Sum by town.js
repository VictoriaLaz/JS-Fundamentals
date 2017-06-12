/**
 * Created by Vicky on 6/12/2017.
 */
function sum(input) {
    let result = {};
    for (let i = 0; i< input.length; i+=2){
        if(Object.keys(result).includes(input[i])){
            result[input[i]] += Number(input[i+1]);
        } else {
            result[input[i]] = Number(input[i+1]);
        }
    }
    result = JSON.stringify(result);
    return result;
}
console.log(sum(['Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4'
]));