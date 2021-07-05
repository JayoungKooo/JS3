//Spread Operator
//배열, 문자열같은 형태의 데이터를 요소 하나하나 모두 분리해서 사용할 수 있게 해주는 문법

var arr1 = [4, 5, 6];
var arr2 = [1, 2, 3];

var arr3 = [...arr2, ...arr1];
console.log(arr3);

var cd = "CD"
var alphabet = ["A", "B", ...cd];
console.log(alphabet);