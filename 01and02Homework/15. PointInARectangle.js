/**
 * Created by Vicky on 5/27/2017.
 */
function rectangle([x, y, xMin, xMax, yMin, yMax]) {
    if(x>=xMin&&x<=xMax&&y>=yMin&&y<=yMax){
        console.log('inside');
    }else {
        console.log('outside');
    }
}