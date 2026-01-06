const fs = require('fs');

console.log('Normal Code starts')

/* fs.readFile('./day_12_notes.txt', (err, data) => { // callback
    console.log('callback started...')
    console.log(data.toString())
}) */
let data = fs.readFileSync('./day_12_notes.txt')
console.log(data.toString());

console.log('Normal Code Continue...')
console.log('Normal Code Continue...')
console.log('Normal Code Continue...')
console.log('Normal Code Ends####')
