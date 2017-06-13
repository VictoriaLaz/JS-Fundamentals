/**
 * Created by Vicky on 6/13/2017.
 */
function autoCompany(input) {
    let cars = new Map();
    for (let car of input) {
        let [brand, model, carsProduced] = car.split(' | ');
        if(!cars.has(brand)){
            cars.set(brand, new Map());
        }
        if(!cars.get(brand).has(model)){
            cars.get(brand).set(model, 0);
        }
        let oldNumber = cars.get(brand).get(model);
        cars.get(brand).set(model, Number(oldNumber) + Number(carsProduced));
    }
    for (let [brand, modelTokens] of cars) {
        console.log(`${brand}`);
        for (let [model, number] of modelTokens) {
            console.log(`###${model} -> ${number}`);
        }
    }
}