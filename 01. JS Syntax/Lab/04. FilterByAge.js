/**
 * Created by Vicky on 5/24/2017.
 */
function filterByAge(minAge, firstName, firstAge, secName, secAge) {
    let firstPerson = {name: firstName, age: firstAge};
    let secondPerson = {name: secName, age: secAge};
    let persons = [firstPerson, secondPerson];
    for(let person of persons){
        if(person.age >= minAge){
            console.log(person);
        }
    }
}

filterByAge(12, 'Ivan', 15, 'Asen', 9);