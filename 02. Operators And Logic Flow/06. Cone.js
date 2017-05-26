/**
 * Created by Vicky on 5/26/2017.
 */
function cone(r, h) {
    let volume = Math.PI*r*r*h/3;
    console.log(volume);
    let surface = Math.PI*r*(r+Math.sqrt(r*r+h*h));
    console.log(surface);
}