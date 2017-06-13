/**
 * Created by Vicky on 6/13/2017.
 */
function arrangeUsernames(input) {
    let names = new Set();
    for (let name of input) {
        names.add(name);
    }
    names = [...names].sort(compare);
    for (let name of names) {
        console.log(`${name}`);
    }
    function compare(a, b) {
        if (a.length != b.length){
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    }
}
arrangeUsernames([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston',

])