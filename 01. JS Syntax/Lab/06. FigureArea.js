/**
 * Created by Vicky on 5/24/2017.
 */
function calculateArea(w, h, W, H) {
    let [a1, a2, a3] = [w*h, W*H, Math.min(w, W)*Math.min(h, H)];
    console.log(a1 + a2 - a3);
}