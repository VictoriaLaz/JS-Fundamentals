/**
 * Created by Vicky on 5/26/2017.
 */
function gradToDegree(grad) {
    let degrees = ((grad * 360) / 400) % 360;
    degrees = degrees < 0 ? degrees + 360 : degrees;
    return degrees;
}
console.log(gradToDegree(0));