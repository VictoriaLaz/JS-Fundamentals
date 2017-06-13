/**
 * Created by Vicky on 6/13/2017.
 */
function followSales(input) {
    let townsAndProducts = new Map();
    for (let line of input) {
        let [town, product, salesAndPrice] = line.split(' -> ');
        let [noOfSales, price] = salesAndPrice.split(' : ');
        if(!townsAndProducts.has(town)){
            townsAndProducts.set(town, new Map());
        }
        let income = noOfSales*price;
        let oldIncome = townsAndProducts.get(town).get(product);
        if (oldIncome) income += oldIncome;
        townsAndProducts.get(town).set(product, income);
    }
    for (let [key, value] of townsAndProducts) {
        console.log(`Town - ${key}`);
        for (let [key1, value1] of value) {
            console.log(`$$$${key1} : ${value1}`);
        }
    }
}
followSales(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3',]
);