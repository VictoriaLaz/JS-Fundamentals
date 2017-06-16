/**
 * Created by Vicky on 6/16/2017.
 */
function isInside(row, col, matrix) {
    return row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length
}
function htmlEscape(text) {
    let map = { '"': '&quot;', '&': '&amp;',
        "'": '&#39;', '<': '&lt;', '>': '&gt;' };
    return (''+text).replace(/[\"&'<>]/g, ch => map[ch]);
}
