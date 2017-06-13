/**
 * Created by Vicky on 6/13/2017.
 */
function printBottles(strArr) {
    let juiceQuantity = new Map();
    let bottleQuantity = new Map();
    for (let line of strArr) {
        let [juice, quantity] = line.split(' => ');
        if(!juiceQuantity.has(juice)){
            juiceQuantity.set(juice, 0);
        }
        juiceQuantity.set(juice, Number(juiceQuantity.get(juice)) + Number(quantity));
        if(juiceQuantity.get(juice) >= 1000){
            if(!bottleQuantity.has(juice)){
                bottleQuantity.set(juice, 0);
            }
            bottleQuantity.set(juice, bottleQuantity.get(juice) + Math.floor(juiceQuantity.get(juice)/1000));
            juiceQuantity.set(juice, juiceQuantity.get(juice) % 1000);

        }
    }
    for (let [key, value] of bottleQuantity) {
        console.log(`${key} => ${value}`);
    }
}
printBottles(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549',
])