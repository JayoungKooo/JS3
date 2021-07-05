//함수선언식
function add() {

}

//함수 표현식
// var add = function(z1, z2){
//     return z1 + z2;
// };

// var add = function(z1, z2){
//         var sum = z1 + z2;
//         return sum;
//     };

//Arrow Function - 화살표함수 (함수표현식)
var add = (z1, z2) => z1 + z2;
//function 사용안함. 
//함수 하나면 return 생략 가능??

var add2 = function (x1, x2) {
    var sum = x1 + x2;
    return sum;
}
//두개가 같은 말
var add2 = (x1, x2) => {
    var sum = x1 + x2;
    return sum;
}


function say(message) {}
var say = message => {}; //파라미터 하나일때 괄호 생략 가능


function myFunction() {}

var myFunction = () => {};