/**
 * Created by Vicky on 5/26/2017.
 */
function isLeap(year) {
    let leap = (year%4 == 0 && year%100 !=0)||year%400 == 0;
    return leap? "yes":"no";
}