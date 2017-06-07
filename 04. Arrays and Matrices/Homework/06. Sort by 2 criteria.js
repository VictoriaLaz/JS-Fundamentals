/**
 * Created by Vicky on 6/7/2017.
 */
function sortArray(input) {
    console.log(input.sort(compare).join('\n'));
    function compare(a, b) {
        "use strict";
        if (a.length < b.length) {
            return -1;
        } else if (a.length > b.length) {
            return 1;
        } else {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            }
            else {
                return 0;
            }
        }
    }
}