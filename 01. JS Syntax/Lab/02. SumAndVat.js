/**
 * Created by Vicky on 5/23/2017.
 */

function sumAndVAT(input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    console.log(`sum = ${sum}`);
    console.log(`VAT = ${sum * 0.2}`);
    console.log(`total = ${sum * 1.2}`);
}

