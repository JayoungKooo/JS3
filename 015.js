//정규식
//regular expression

var txt = "Hello World! world"

var regexp = /World/gi; //g:전체 다 찾기, i:소문자 대문자 노상관

console.log(txt.replace(regexp, "Jeremy"))



var str = "11321sfw5s351"
var regexp1 = /[0-9]/g;
var result = str.match(regexp1);
console.log(result);

var str2 = "re, green, red, green, blue, yellow, gre, gen"
var regexp2 = /(red|green)/g;
var result2 = str2.match(regexp2)
console.log(result2);



//주로 많이 쓰이는 곳 전화번호or이메일 형식 맞는지
var tel = "010-3008-9614";
//010-4자리-3자리
var regexp3 = /^(010)-\d{4}-\d{4}/;
console.log(regexp3.test(tel));


//aaaa123@kjk.co.kr
//za1234@gmail.com
//afef@fdsdfs
//^ 시작, \w 문자 + 하나이상 .인식하려면\이거 같이 써줘야함 $끝
var regexp4 = /^\w+@\w+(\.\w{2,3})+$/;
console.log(regexp4.test("dslkjf23@gamil.com "))