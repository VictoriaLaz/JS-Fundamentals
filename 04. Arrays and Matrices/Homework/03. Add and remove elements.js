/**
 * Created by Vicky on 6/7/2017.
 */
function addRemove(input) {
    let addCount = 1;
    let result = [];
    for(let i = 0; i<input.length; i++){
        if(input[i] == 'add'){
            result.push(addCount);
            addCount++;
        }else {
            if(result.length != 0){
                result.pop()
                addCount++;
            }else {
                addCount++;
            }
        }
    }
    if(result.length != 0){
        console.log(result.join('\n'));
    }else{
        console.log('Empty');
    }

}
console.log(addRemove(['add', 'add', 'add', 'add']));