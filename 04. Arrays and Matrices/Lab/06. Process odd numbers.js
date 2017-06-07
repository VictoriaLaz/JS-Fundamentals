/**
 * Created by Vicky on 6/6/2017.
 */
let oddNumbers = input =>
    input.filter((e, i) => i%2 !=0)
        .map(e => e*2)
        .reverse()
        .join(' ')
