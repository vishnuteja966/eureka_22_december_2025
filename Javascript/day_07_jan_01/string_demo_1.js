let str1 = 'Hello'; // String Literals
let str2 = 'Hello'; // String Literals

let str3 = new String('Hello'); // String Object
let str4 = new String('Hello'); // String Object

// typeof
console.log(typeof str1); // string
console.log(typeof str3); // object

// comparision
console.log(str1 == str2);  // true
console.log(str1 == str3);  // true
console.log(str3 == str4);  // false