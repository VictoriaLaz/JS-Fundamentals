/**
 * Created by Vicky on 6/14/2017.
 */
function airport(input) {
    let planesOnAirport = new Set();
    let towns = new Map();
    for (let record of input) {
        let [planeID, town, passCount, action] = record.split(' ');
        if(!checkPlane(planeID, action)){
            continue;
        }
        if(!towns.has(town)){
            towns.set(town, new Map());
            towns.get(town).set('Arrivals', 0);
            towns.get(town).set('Departures', 0);
            towns.get(town).set('Planes', new Set());
        }
        if(action === 'land'){
            let oldPassengers = towns.get(town).get('Arrivals');
            towns.get(town).set('Arrivals', Number(oldPassengers) + Number(passCount));
        } else {
            let oldPassengers = towns.get(town).get('Departures');
            towns.get(town).set('Departures', Number(oldPassengers) + Number(passCount));
        }
        towns.get(town).get('Planes').add(planeID);
    }

    planesOnAirport = [...planesOnAirport].sort(sortPlanes);
    console.log('Planes left:');
    for (let plane of planesOnAirport) {
        console.log(`- ${plane}`);
    }

    towns = [...towns].sort(sortTowns);
    for (let [key, innerMap] of towns) {
        console.log(`${key}`);
        innerMap = [...innerMap];
        console.log(`Arrivals: ${innerMap[0][1]}`);
        console.log(`Departures: ${innerMap[1][1]}`);
        innerMap[2][1]=[...innerMap[2][1]].sort(sortPlanes);

        console.log('Planes:');
        for (let plane of innerMap[2][1]) {
            console.log(`-- ${plane}`);
        }
    }

    function sortPlanes(a, b) {
        return a.localeCompare(b);
    }
    function sortTowns(a, b) {
        if([...a[1]][0][1] !== [...b[1]][0][1]){
            return [...a[1]][0][1] < [...b[1]][0][1];
        } else {
            return a[0].localeCompare(b[0]);
        }
    }
    function checkPlane(planeID, action) {
        if (action === 'land'){
            if(planesOnAirport.has(planeID)){
                return false;
            } else {
                planesOnAirport.add(planeID);
                return true;
            }
        } else {
            if(planesOnAirport.has(planeID)){
                planesOnAirport.delete(planeID);
                return true;
            } else {
                return false;
            }
        }

    }
}

console.log(airport([
    "Boeing474 Madrid 300 land",
    "AirForceOne WashingtonDC 178 land",
    "Airbus London 265 depart",
    "ATR72 WashingtonDC 272 land",
    "ATR72 Madrid 135 depart"

]));