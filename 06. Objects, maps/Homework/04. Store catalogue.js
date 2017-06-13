/**
 * Created by Vicky on 6/13/2017.
 */
function catalogue(input) {
    let unsortedProducts = new Map();
    let sortedProducts = new Map();
    for (let line of input) {
        let [product, price] = line.split(' : ');
        unsortedProducts.set(product,Number(price));
    }
    let products = Array.from(unsortedProducts.keys()).sort();
    for (let product of products) {
        sortedProducts.set(product, unsortedProducts.get(product));
    }
    sortedProducts = [...sortedProducts];
    console.log(sortedProducts[0][0][0]);
    for(let i = 0; i<sortedProducts.length-1; i++){
        console.log(`  ${sortedProducts[i][0]}: ${sortedProducts[i][1]}`);
        if(sortedProducts[i][0][0] !== sortedProducts[i+1][0][0]){
            console.log(sortedProducts[i+1][0][0]);
        }
    }
    console.log(`  ${sortedProducts[sortedProducts.length-1][0]}: ${sortedProducts[sortedProducts.length-1][1]}`);

}
catalogue([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10',


]);