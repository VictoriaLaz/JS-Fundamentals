function inventarShow(input) {
    "use strict";
    let hero = {};
    let arr = [];
    for (let i = 0; i<input.length; i++) {
        let [name, level, inventar] = input[i].split(' / ');
        if (inventar == undefined)
        {
            hero = {'name':name, 'level':Number(level),'items': []};
            arr.push(hero);
            continue;
        }
        let iventByOne = inventar.split(',').map(x=>x.trim()).filter(x=>x !== '');


        hero = {'name':name, 'level':Number(level),'items':iventByOne };
        arr.push(hero);
    }
    console.log(JSON.stringify(arr));
}