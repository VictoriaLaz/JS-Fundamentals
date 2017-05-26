/**
 * Created by Vicky on 5/26/2017.
 */
function triangleArea(s1, s2, s3) {
    let sp = (s1 + s2 + s3)/2;
    let area = Math.sqrt(sp*(sp-s1)*(sp-s2)*(sp-s3))
    return area;
}