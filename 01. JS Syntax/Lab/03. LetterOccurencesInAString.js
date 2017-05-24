/**
 * Created by Vicky on 5/24/2017.
 */
function letterOcc(string, letter) {
    let occurences = 0;
    for (let i of string){
        if(i == letter){
            occurences += 1;
        }
    }
    console.log(occurences);
}

letterOcc('hello', 'l');