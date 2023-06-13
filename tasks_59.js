console.log("Task № 1");
/* № 1
There is a salaries object with arbitrary number of salaries.
Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
If salaries is empty, then the result must be 0.
For instance:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
*/
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let emptyInfo = {};

function sumSalaries(salaries) {
    /*
    let salaryVal = Object.values(salaries);
    console.log(salaryVal); // [ 100, 300, 250 ]

    let sum = salaryVal.reduce(((superposition, current) => superposition += current), 0);
    return sum;
    */
    return Object.values(salaries).reduce(((superposition, current) => superposition += current), 0);
}

console.log(sumSalaries(salaries)); // 650
console.log(sumSalaries(emptyInfo)); // 0




console.log("Task № 2");
/* № 2
Write a function count(obj) that returns the number of properties in the object:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2

Try to make the code as short as possible.
P.S. Ignore symbolic properties, count only “regular” ones.
*/
let user = {
    name: 'John',
    age: 30
};

function count(obj) {
    /*
    let transformed = Object.entries(obj);
    console.log(transformed); // [ [ 'name', 'John' ], [ 'age', 30 ] ]
    return transformed.length;
    */
    return Object.entries(obj).length;
}

console.log(count(user)); // 2

// PS: здесь код можно сделать супер коротким, в одну строчку. Но на всякий расписал более подробным образом, он закомментирован