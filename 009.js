//Object Destructuring

function getPerson() {
    return {
        firstName: "John",
        lastName: "Doe",
        age: 34,
        email: "sldfkjldsj@gmail.com",
        city: "JEJU",
        country: "Korea"

    }
}

var person = getPerson();
console.log(person.firstName);
console.log(person.lastName);


//두번째 방법 오브젝트 디스트럭쳐링..
var {
    firstName,
    lastName
} = getPerson();
console.log(firstName);
console.log(lastName);