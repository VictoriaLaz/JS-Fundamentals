/**
 * Created by Vicky on 6/10/2017.
 */
function extract(input) {
    let regex = /www\.[A-Za-z0-9\-]+(\.[a-z]+)+/g;
    let text = input.join(' ');
    if(text.match(regex) != null){
        console.log(text.match(regex).join('\n'));;
    }

}
extract(['Join WebStars now for free, at www.web-stars.com',
'You can also support our partners:',
    'Internet - www.internet.com',
'WebSpiders - www.webspiders101.com',
'Sentinel - www.sentinel.-ko']
)