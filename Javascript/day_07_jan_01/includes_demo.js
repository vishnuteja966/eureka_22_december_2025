let str = 'This is Javascript Class';

console.log(str.includes('Java')); // true
console.log(str.includes('java')); // false
console.log(str.includes('Python')); // false

console.log(str.startsWith('This')); // true
console.log(str.startsWith('That')); // false

console.log(str.endsWith('Class')); // true
console.log(str.endsWith('Session')); // false