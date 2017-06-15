/**
 * Created by Vicky on 6/15/2017.
 */
function decodeMessage(input) {
    let specialKey = input.shift();
    let regex = new RegExp(`[\\s+|\\^]${specialKey}`, 'gi');
    for(let i = 0; i < input.length; i++){

    }
    function replacement(match, gr1, gr2) {
        gr2 = gr2.replace(/!/g,'1')
            .replace(/%/g, '2')
            .replace(/#/g,'3')
            .replace(/\$/g,'4')
            .replace(/[A-Z]/g,x=>x.toLowerCase());
        return gr1 + gr2;
    }

}
decodeMessage([
    'specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!',
])