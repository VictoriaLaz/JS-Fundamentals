/**
 * Created by Vicky on 6/12/2017.
 */
function townPopulations(input) {
    let townsInfo = new Map();
    for (let town of input) {
        town = town.split(' <-> ');
        townsInfo.has(town[0]) ? townsInfo.set(town[0], Number(townsInfo.get(town[0]) + Number(town[1]))):
            townsInfo.set(town[0], Number(town[1]));
    }
    for (let [key, value] of townsInfo) {
        console.log(`${key} : ${value}`);
    }
}
townPopulations(
    ['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'
])