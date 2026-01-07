function add(a, b, c = 0) { // c having default value 0
    console.log(a + b + c)
}
add(10, 20);
add(10, 20, 30);

function greet(msg, userName = 'Guest') { // Guest is default value for userName
    console.log(`Hellooo ${userName} , ${msg}`)
}
greet('Good Morning')
greet('Good Morning', 'Karthik')