let str = 'This is Javascript Class,This is String Class';

console.log(str.replace('Class', 'Session'));
console.log(str.replaceAll('Class', 'Session'));

// use replace() to replaceAll
console.log(str.replace(/Class/g, 'Session'));
