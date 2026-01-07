function add2Num(a, b) {
    console.log(a + b)
}
add2Num(10, 20);

function add3Num(a, b, c) {
    console.log(a + b + c)
}
add3Num(10, 20, 30);

// write a function that should be able to add N params
function sum(...arr) { // rest param
    let res = 0;
    for (ele of arr) {
        res = res + ele;
    }
    console.log('Sum is ', res)
}
sum(10, 20)
sum(10, 20, 30)
sum(10, 20, 30, 40)
sum(10, 20, 30, 40, 50)