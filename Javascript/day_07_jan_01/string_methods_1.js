let str = 'Hello World'
console.log(str.length); // 11
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log('char at index 1::', str[1]); // e
console.log('char at index 1::', str.charAt(1)); // e
console.log('char at index 1::', str.at(1)); // e

console.log('char at index 1::', str[-1]); // e
console.log('char at index 1::', str.charAt(-1)); // 
console.log('char at index 1::', str.at(-1)); // d

console.log(str.charCodeAt(1)); // e = 101