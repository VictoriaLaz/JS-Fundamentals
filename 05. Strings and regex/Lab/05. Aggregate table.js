/**
 * Created by Vicky on 6/9/2017.
 */
function aggregate(input) {
    let towns = [];
    let income = 0;
    for (let obj of input) {
        obj = obj.split('|').filter(a => a != '');
        towns.push(obj[0].trim());
        income+=Number(obj[1]);
    }
    console.log(towns.join(', '));
    console.log(income);
}
aggregate(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);