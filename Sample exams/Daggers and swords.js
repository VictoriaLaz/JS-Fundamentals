/**
 * Created by Vicky on 6/15/2017.
 */
function sortBlades(inputArr) {
    let blades = inputArr.map(Number).map(Math.floor).filter(x=>x>10);
    let result = '<table border="1">\n<thead>\n<tr><th colspan="3">Blades</th></tr>\n<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n<tbody>\n'
    for(let i = 0; i<blades.length; i++){
        let length = blades[i];
        let type = '';
        if(length>40){
            type = 'sword';
        } else {
            type = 'dagger';
        }
        let application = findApplication(length);
        result += `<tr><td>${length}</td><td>${type}</td><td>${application}</td></tr>\n`

    }
    result += '</tbody>\n</table>';
    console.log(result);
    function findApplication(length) {
        let result = (length*5 + length)%5;
        switch (result){
            case 1 : return 'blade';
            case 2 : return 'quite a blade';
            case 3 : return 'pants-scraper';
            case 4 : return 'frog-butcher';
            case 0 : return '*rap-poker';
        }
    }
}
sortBlades([
    '17.8',
    '19.4',
    '13',
    '55.8',
    '126.96541651',
    '3',
])