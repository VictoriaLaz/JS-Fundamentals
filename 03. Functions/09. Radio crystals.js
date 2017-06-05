/**
 * Created by Vicky on 6/5/2017.
 */
function process(input) {
    let desiredThickness = input[0];
    let cutCount = 0;
    let lapCount = 0;
    let grindCount = 0;
    let etchCount = 0;
    for(let i = 1; i<input.length; i++) {
        let currentThickness = input[i];
        console.log(`Processing chunk ${currentThickness} microns`);
        currentThickness = cut(currentThickness);
        currentThickness = lap(currentThickness);
        currentThickness = grind(currentThickness);
        currentThickness = etch(currentThickness);
        if (currentThickness != desiredThickness) {
            xRay(currentThickness);
        }
        console.log(`Finished crystal ${desiredThickness} microns`);
    }
    function cut(thickness) {
        while (Math.floor(thickness/4)>=desiredThickness-1) {
            thickness = thickness / 4;
            cutCount++;
        }
        if(cutCount > 0) {
            console.log(`Cut x${cutCount}`);
            thickness = transport(thickness);
        }
        cutCount = 0;
        return thickness;
    };
    function lap(thickness) {
        while (Math.floor(thickness*0.8)>=desiredThickness-1) {
            thickness = thickness*0.8;
            lapCount++;
        }
        if(lapCount > 0) {
            console.log(`Lap x${lapCount}`);
            thickness = transport(thickness);

        }
        lapCount = 0;
        return thickness;

    }
    function grind(thickness) {
        while (Math.floor(thickness-20)>=desiredThickness-1) {
            thickness = thickness-20;
            grindCount++;
        }
        if(grindCount > 0) {
            console.log(`Grind x${grindCount}`);
            thickness = transport(thickness);

        }
        grindCount=0;
        return thickness;
    }
    function etch(thickness) {
        while (Math.floor(thickness-2)>=desiredThickness-1) {
            thickness = thickness-2;
            etchCount++;
        }
        if(etchCount > 0) {
            console.log(`Etch x${etchCount}`);
            thickness = transport(thickness);

        }
        etchCount=0;
        return thickness;
    }
    function xRay(thickness) {

        console.log('X-ray x1');
        return thickness+1;
    }
    function transport(thickness) {
        console.log('Transporting and washing');
        return Math.floor(thickness);
    }
}

process([1000, 4000, 8100]);