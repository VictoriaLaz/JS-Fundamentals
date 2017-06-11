/**
 * Created by Vicky on 6/11/2017.
 */
function towns(input) {
    let reslt = '['
    for(let i = 1; i< input.length; i++) {
        input[i] = input[i].split('|')
            .filter(x => x !== '')
            .map(x => x.trim());
        let town = {Town: input[i][0], Latitude: Number(input[i][1]), Longitude: Number(input[i][2])};
        town = JSON.stringify(town);
        if(i === input.length-1){
            reslt += `${town}`
        }else {
            reslt += `${town},`
        }

    }
    reslt += ']'
    return reslt;
}
console.log(towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));