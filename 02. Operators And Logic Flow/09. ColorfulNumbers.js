/**
 * Created by Vicky on 5/26/2017.
 */
function colorfulNumbers(n) {
    let result = '<ul>';
    for(let i = 1; i<=n; i++){
        let color = i%2 == 0 ? 'blue':'green';
        result += (`<li><span style='color:${color}'>${i}</span></li>`)
    }
    result += '</ul>'
    return result;
}