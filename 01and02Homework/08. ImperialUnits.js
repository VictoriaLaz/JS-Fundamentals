/**
 * Created by Vicky on 5/27/2017.
 */
function convert(inches) {
    let feet = Math.floor(inches/12);
    let inches2 = inches%12;
    console.log(`${feet}'-${inches2}"`);
}
convert(11);