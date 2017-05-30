/**
 * Created by Vicky on 5/30/2017.
 */
function moviePrice(input) {
    let movie = input[0].toLowerCase();
    let dayOfWeek = input[1].toLowerCase();
    if(movie == "the godfather"){
        switch (dayOfWeek){
            case 'monday':
                console.log('12');
                break;
            case 'tuesday':
                console.log('10');
                break;
            case 'wednesday':
            case 'friday':
                console.log('15');
                break;
            case 'thursday':
                console.log('12.50');
                break;
            case 'saturday':
                console.log('25');
                break;
            case 'sunday':
                console.log('30');
                break;
            default:
                console.log('error');
        }

    } else if(movie == "schindler's list"){
        switch (dayOfWeek){
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
                console.log('8.50');
                break;
            case 'saturday':
            case 'sunday':
                console.log('15');
                break;
            default:
                console.log('error');
        }

    } else if(movie == "casablanca") {
        switch (dayOfWeek) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
                console.log('8');
                break;
            case 'saturday':
            case 'sunday':
                console.log('10');
                break;
            default:
                console.log('error');
        }
    } else if(movie == "the wizard of oz") {
        switch (dayOfWeek) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
                console.log('10');
                break;
            case 'saturday':
            case 'sunday':
                console.log('15');
                break;
            default:
                console.log('error');
        }
    } else {
        console.log('error');
    }
}
moviePrice([casablanca, tuesday])