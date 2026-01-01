let str = 'This is Javascript Class';

console.log(str.slice(5));
console.log(str.substring(5));

console.log(str.slice(8, 18));
console.log(str.substring(8, 18));

console.log(str.slice(8, -2)); // slice works with -ve index
console.log(str.substring(8, -2));

console.log(str.substring(8, 18)); // substring(start,end)
console.log(str.substr(8, 18)); // substring(start,how many chars)