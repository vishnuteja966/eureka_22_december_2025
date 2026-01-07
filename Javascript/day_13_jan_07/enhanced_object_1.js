let obj1 = { // es_5
    a: 10,
    b: 20,
    f1: function () {
        console.log('I am f1...')
    },
    f2: () => {
        console.log('I am f2...')
    }
}
console.log(obj1.a);
obj1.f1();

// es_6
let x = 100;
let y = 200;
let obj2 = { // enhanced object
    x,
    y,
    f3() {
        console.log('I am f3...')
    }
}