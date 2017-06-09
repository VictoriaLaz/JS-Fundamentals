/**
 * Created by Vicky on 6/9/2017.
 */
function extract(string) {
    let openingIndex = string.indexOf('(');
    let closingIndex = string.indexOf(')', openingIndex);
    let text = [];
    while (openingIndex !== -1 && closingIndex!== -1){
        text.push(string.substring(openingIndex+1, closingIndex));
        openingIndex=string.indexOf('(', closingIndex+1);
        closingIndex=string.indexOf(')', closingIndex+1);
    }
    console.log(text.join(', '));
}
extract('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');