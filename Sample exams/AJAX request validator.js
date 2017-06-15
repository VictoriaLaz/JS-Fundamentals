/**
 * Created by Vicky on 6/15/2017.
 */
function validate(input) {
    let decodingHash = input[input.length-1];
    for(let i = 0; i<input.length-3; i+=3){
        if(!validateMethod(input[i])||!validateCredentials(input[i+1])||!validateContent(input[i+2])){
            console.log('Response-Code:400');
            continue;
        }
        let [val1, method] = (input[i].split(' '));
        let [val2, authorization, token] = (input[i+1].split(' '));

        if(!validateMethodCredential(method, authorization)){
            console.log(`Response-Method:${method}&Code:401`);
            continue;
        }
        if(!canDecode(token)){
            console.log(`Response-Method:${method}&Code:403`);
            continue;
        }
        console.log(`Response-Method:${method}&Code:200&Header:${token}`);


    }

    function canDecode(token) {
        for(let i = 1; i <decodingHash.length; i +=2){
            let letter = new RegExp(`${decodingHash[i]}`, 'g');
            let matches = token.match(letter);
            if (matches != null) {

                let lettercount = matches.length;
                if (Number(decodingHash[i - 1]) === lettercount) {
                    return true;
                }
            }
        }

    }



    function validateMethodCredential(method, authorization) {
        if(method === 'GET'){
            return (authorization === 'Basic'||authorization === 'Bearer')
        } else {
            return (authorization === 'Bearer')
        }
    }

    function validateMethod(text) {
        let regex = /^Method: (GET|PUT|POST|DELETE)$/;
        return regex.test(text);
    }

    function validateCredentials(text) {
        let regex = /^Credentials: (Basic|Bearer)\s[A-Za-z0-9]+$/;
        return regex.test(text);
    }

    function validateContent(text) {
        let regex = /^Content: [A-Za-z0-9\.]+$/;
        return regex.test(text);
    }
}