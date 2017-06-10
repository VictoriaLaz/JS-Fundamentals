/**
 * Created by Vicky on 6/10/2017.
 */
function findNames(string) {
    let regex = /\b_(\w+)\b/g;
    console.log(string.match(regex).join(',').replace(regex, extract ));
    function extract(full, gr1 ) {
        return gr1;
    }
}
findNames('The _id and _age variables are both integers.');