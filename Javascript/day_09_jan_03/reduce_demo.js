let arr = [10, 20, 30, 40, 50];

// find sum of all the numbers in the array
let sum = arr.reduce((prev, curr) => {
    console.log(prev, curr);
    return prev + curr;
}, 0);
console.log(`Sum is ${sum}`);


