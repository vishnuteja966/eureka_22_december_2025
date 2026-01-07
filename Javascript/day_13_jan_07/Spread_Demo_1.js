let arr1 = [10, 20];
let arr2 = [...arr1]; // spread : shallow copy

console.log('Max is ', Math.max(10, 20, 30, 40, 50))
console.log('Min is ', Math.min(10, 20, 30, 40, 50))

let arr = [10, 20, 30, 40, 50];
console.log('Max-2 is ', Math.max(arr))
console.log('Min-2 is ', Math.min(arr))

console.log('Max-3 is ', Math.max(...arr))
console.log('Min-3 is ', Math.min(...arr))