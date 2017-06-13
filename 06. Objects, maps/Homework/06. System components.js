/**
 * Created by Vicky on 6/13/2017.
 */
function systemComponents(strArr) {
    let components = new Map();
    for (let line of strArr) {
        let [system, component, subcomponent] = line.split(' | ');
        if (!components.has(system)) {
            components.set(system, new Map());
        }
        if (!components.get(system).has(component)) {
            components.get(system).set(component, []);
        }
        components.get(system).get(component).push(subcomponent);
    }
    components = [...components].sort(compareSystems);
    for (let [system, innerMap] of components) {
        console.log(system);
        innerMap = [...innerMap].sort(subCompSort);
        for (let [component, subCompArr] of innerMap) {
            console.log('|||' + component);
            for (let subComp of subCompArr) {
                console.log('||||||' + subComp);
            }
        }
    }
    function subCompSort(a, b) {
        return a[1].length < b[1].length;
    }


    function compareSystems(a, b) {
        if ([...a[1]].length > [...b[1]].length) {
            return -1;
        } else if ([...a[1]].length < [...b[1]].length) {
            return 1;
        } else {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        }

    }
}
systemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security',
])