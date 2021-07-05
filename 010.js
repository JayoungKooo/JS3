//Array Distructuring

function getScores() {
    return [70, 21, 100, 15, 30, 56, 98];
}




// var scores = getScores();
// scores[0];
// scores[1];
// scores[2];
// ///

var [x, y, z, ...args] = getScores();
console.log(x);
console.log(y);
console.log(z);
console.log(args);







function getPerson() {
    return [
        "John",
        "Doe",
        ["Red", "Green", "Blue"]
    ];
}

var [firstName, lastName, [color1, color2, color3]] = getPerson();
// var [firstName, lastName, favoriteColors] = getPerson();
console.log(color1)






//
function getCoordinates() {
    return [12.33332, 34.321654];
}


//배열 [경도, 위도];
var coordinates = gGetCoordinates();
coordinates[0]; //경도
coordinates[1]; //위도

var [long, lat] = getCoordinates(); //이렇게 쓰는게 더 명확하게 사용가능하다.