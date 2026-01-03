let str = 'entertainment';
// output = {e:3, n:2, t:3}

let res = str.split('').reduce((obj, char) => {
    if (obj[char]) {
        obj[char] = obj[char] + 1;
    } else {
        obj[char] = 1;
    }
    return obj;
}, {});
console.log(res);