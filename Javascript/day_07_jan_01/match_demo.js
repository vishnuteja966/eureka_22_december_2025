let str = 'rain in spain mAinly stays in the plain';

let res1 = str.match(/ain/); // REGEX
console.log(res1);

let res2 = str.match(/ain/g); // REGEX
console.log(res2);

let res3 = str.match(/ain/gi); // REGEX
console.log(res3);