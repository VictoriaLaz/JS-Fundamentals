/**
 * Created by Vicky on 5/26/2017.
 */
function circleArea(r) {
    let area = Math.PI * r * r;
    console.log(area);
    let areaRounded = Math.round(area * 100) / 100;
    console.log(areaRounded);
}