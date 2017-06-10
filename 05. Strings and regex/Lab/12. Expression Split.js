function expressionSplit(expression) {

    let elements = expression
        .split(/[\s.();,]+/);
    console.log(elements.join("\n"));
}
/**
 * Created by Vicky on 6/9/2017.
 */
