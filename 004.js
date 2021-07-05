//Rest Parameter

function add(z1, z2) {
    return z1 + z2;
};

function add(z1, z2, z3) {
    return z1 + z2 + z3
};

function add(...nums) {
    ///... => 몇개가 들어와도 상관 없다는 뜻
    var sum = 0;
    for (var n of nums) {
        sum += n;
    }

    return sum;
}
console.log(add(5, 2, 6, 4, 15, 8, 6));