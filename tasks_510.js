console.log("№ 1");
/* № 1
Destructuring assignment
importance: 5
We have an object:

let user = {
  name: "John",
  years: 30
};
Write the destructuring assignment that reads:

name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false, if no such property)
Here’s an example of the values after your assignment:

let user = { name: "John", years: 30 };

// your code to the left side:
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false
*/
function destructure({ name, years: age, isAdmin = false }) {
    console.log(name, age, isAdmin);
}

let user = {
    name: "John",
    years: 30
};

destructure(user); // John 30 false

let boss = {
    name: "Spoke",
    years: 40,
    isAdmin: true
};

destructure(boss); // Spoke 40 true




console.log("№ 2");
/* № 2
There is a salaries object:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Create the function topSalary(salaries) that returns the name of the top-paid person.

If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
function topSalary(salaries) {   
    function sortValues(a, b) {
        if (a > b) return 1;
        if (a = b) return 0;
        if (a < b) return -1;
    }

    let max = Object.values(salaries).sort(sortValues()).at(-1);
    // console.log(max); // 300

    for (let [name, sum] of Object.entries(salaries)) {
        if (sum == max) return name;
    }

    return null;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let anotherSalaries = {};

console.log(topSalary(salaries)); // Pete
console.log(topSalary(anotherSalaries)); // null