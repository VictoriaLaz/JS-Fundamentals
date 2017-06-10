/**
 * Created by Vicky on 6/9/2017.
 */
function getBill(input) {
    let purchases = [];
    let price = 0;
    for(let i=0; i<input.length; i+=2){
        purchases.push(input[i]);
        price += Number(input[i+1]);
    }
    console.log(`You purchased ${purchases.join(', ')} for a total sum of ${price}`);
}