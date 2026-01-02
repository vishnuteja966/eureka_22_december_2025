let employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];
// display the first female employee in this list
let first_female_emp = employees.find((emp) => emp.gender === 'female');
console.log(first_female_emp)

// display the index of first female employee in this list
let first_female_emp_ind = employees.findIndex((emp) => emp.gender === 'female');
console.log(first_female_emp_ind)

// display the last female employee in this list
let last_female_emp = employees.findLast((emp) => emp.gender === 'female');
console.log(last_female_emp)

// display the index of last female employee in this list
let last_female_emp_ind = employees.findLastIndex((emp) => emp.gender === 'female');
console.log(last_female_emp_ind)

// display all the female employees in the list
let all_female_emp = employees.filter((emp) => emp.gender === 'female');
console.log(all_female_emp)