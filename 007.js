//Object Literal Syntax Extension

var firstName = "John";
var lastName = "Doe";


var person = {
    "firstName": firstName,
    lastName: lastName
}

// person[fir]
var type = "student";
var score = {
    [type]: "John Doe",
    //student: "John Doe",
    score: 95
};

//이런식으로 여러방식으로 사용 가능
//score.student
//score["student"]
//score[type]