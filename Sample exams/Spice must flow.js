/**
 * Created by Vicky on 6/13/2017.
 */
function calculateSpice(input) {
    let yeld = Number(input[0]);
    let daysCount = 0;
    let spiceInStorage = 0;
    while (yeld >= 100){
        spiceInStorage += yeld;
        yeld -= 10;
        daysCount ++;
        spiceInStorage -= 26;
    }
    if(spiceInStorage > 26) {
        spiceInStorage -= 26;
    }
    console.log(daysCount);
    console.log(spiceInStorage);
}
calculateSpice([450]);