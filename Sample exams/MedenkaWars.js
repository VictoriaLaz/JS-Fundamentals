/**
 * Created by Vicky on 6/15/2017.
 */
function calculate(input) {
    let vitkorDamage = 0;
    let naskorDamage = 0;
    let vitkorCounter = 1;
    let naskorCounter = 1;
    let vitcorPreviousDamage = 0;
    let naskorPreviouDamage = 0;
    let attacks = [];
    for (let attack of input) {
        attack = attack.split(' ');
        attacks.push(attack);
    }
    for(let i = 0; i<attacks.length; i++){
        if(attacks[i][1] === 'dark'){
            let damage = Number(attacks[i][0])*60;
            if(damage === naskorPreviouDamage) {
                naskorCounter++;
                if (naskorCounter === 5) {
                    naskorDamage += damage * 4.5;
                    naskorCounter = 1;
                } else {
                    naskorDamage += damage;
                }
            } else {
                naskorDamage += damage;
            }
            naskorPreviouDamage = damage;
        } else {
            let damage = Number(attacks[i][0])*60;
            if(damage === vitcorPreviousDamage) {
                vitkorCounter++;
                if (vitkorCounter == 2) {
                    vitkorDamage += damage * 2.75;
                    vitkorCounter = 1;
                } else {
                    vitkorDamage += damage;
                }
            } else {
                vitkorDamage += damage;
            }
            vitcorPreviousDamage = damage;
        }
    }
    let winner = '';
    let winnerDamage = 0;
    if(vitkorDamage > naskorDamage){
        winner = 'Vitkor';
        winnerDamage = vitkorDamage;
    } else {
        winner = 'Naskor';
        winnerDamage = naskorDamage;
    }
    console.log(`Winner - ${winner}`);
    console.log(`Damage - ${winnerDamage}`);

}
calculate([
    '2 dark medenkas',
    '1 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',

])