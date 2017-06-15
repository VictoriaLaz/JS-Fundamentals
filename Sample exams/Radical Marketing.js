/**
 * Created by Vicky on 6/15/2017.
 */
function findTheImportantOne(input) {
    let people = new Map();
    let peopleSubscribers = new Map();
    let peopleArrs=[];
    for (let line of input) {
        line = line.split('-');
        peopleArrs.push(line);
    }
    for(let i = 0; i<peopleArrs.length; i++){
        if(peopleArrs[i].length === 1){
            if(!people.has(peopleArrs[i][0])){
                people.set(peopleArrs[i][0], new Set());
                peopleSubscribers.set(peopleArrs[i][0], new Set());
            }
        } else {
            if(!people.has(peopleArrs[i][0])||!people.has(peopleArrs[i][1])){
                continue;
            }
            people.get(peopleArrs[i][0]).add(peopleArrs[i][1]);
            peopleSubscribers.get(peopleArrs[i][1]).add(peopleArrs[i][0]);
        }

    }
    let winner = [...peopleSubscribers].sort(comparePeople);
    console.log(winner[0][0]);
    let subscribers = [...winner[0][1]];
    if(subscribers.length!= 0) {
        for (let i = 0; i < subscribers.length; i++) {
            console.log(`${i + 1}. ${subscribers[i]}`);
        }
    }
    function comparePeople(a, b) {
        let aSubscribers = a[1].size;
        let bSubscribers = b[1].size;
        let aSubscribed = [...people.get(a[0])].length;
        let bSubscribed = [...people.get(b[0])].length;
        if(aSubscribers !== bSubscribers){
            return bSubscribers-aSubscribers;
        } else {
            return bSubscribed - aSubscribed;
        }
    }

}
findTheImportantOne([
    'A',
    'B',
    'C',
    'D',
    'A-B',
    'B-A',
    'C-A',
    'D-A',

])