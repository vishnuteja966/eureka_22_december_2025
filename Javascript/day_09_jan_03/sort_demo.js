let arr1 = [20, 50, 10, 40, 30];
arr1.sort();
console.log(arr1);

let arr2 = ['Tata', 'Honda', 'Maruti', 'Hyundai'];
arr2.sort();
console.log(arr2);

let arr3 = [9, 101, 7, 8, 6, 91, 92, 102, 103, 105, 95, 4];
arr3.sort();
console.log(arr3)

// numeric sort
arr3.sort((a, b) => a - b); // ascending
console.log(arr3)