const { random, iteratee } = require("lodash");

console.log("Task № 1");
/* № 1
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back.

Идея: раздешлить по "-"
Затем, сделать для каждого элемента получившегося массива toUpperCase для 1-го символа:
    Как делать: отдельно увеличить 1-й символ и сложить с остальной частью строки (от 1 до length - 1)
И затем, объединить все элементы через "" для camel case
*/
function camelize(str) {
    let splt = str.split("-");
    // console.log(splt); // [ '', 'webkit', 'transition' ]

    let filtered = splt.filter(item => item !== "");
    // console.log(filtered); // [ 'webkit', 'transition' ]

    let upper = splt.map(item => item = (item !== "") ? item[0].toUpperCase() : item);
    // console.log(upper); // [ '', 'W', 'T' ]

    let fck = upper.shift();
    // console.log(fck); // ''

    if (fck !== "") upper.unshift(fck.toLowerCase());
    // console.log(upper); // [ 'W', 'T' ]

    let withoutMainLetter = filtered.map(function (item) {
        let result = "";
        for (let i = 1; i < item.length; i++) {
            result += item[i];
        }
        return result;
    });
    // console.log(withoutMainLetter); // [ 'ebkit', 'ransition' ]

    // Не знаю как это сделать без цикла:
    let finalArray = [];
    for (let j = 0; j < upper.length; j++) {
        let glue = upper[j] + withoutMainLetter[j];
        finalArray.push(glue);
    }
    // console.log(finalArray); // [ 'Webkit', 'Transition' ]

    let final = finalArray.join("");
    // console.log(final); // WebkitTransition

    return final;
}

console.log(camelize("background-color")); // == 'backgroundColor';
console.log(camelize("list-style-image")); // == 'listStyleImage';
console.log(camelize("-webkit-transition")); // == 'WebkitTransition';



console.log("Task № 2");
/* № 2
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
alert( arr ); // 5,3,8,1 (not modified)
*/
function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered); // 3,1 (matching values)
console.log(arr); // 5,3,8,1 (not modified)



console.log("Task № 3");
/* № 3
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.

For instance:

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
alert( arr ); // [3, 1]
*/
function filterRangeInPlace(arr, a, b) {
    /*
    arr.forEach(item => {
        if (item < a || item > b) arr.pop();
    });
    */
    return arr.map(item => item >= a && item <= b);
}

let arr_1 = [5, 3, 8, 1];
filterRangeInPlace(arr_1, 1, 4); // removed the numbers except from 1 to 4
console.log(arr_1); // [3, 1]


// В задаче 3... ЕБЕНЯ ПОЛНЕЙШАЯ!!!



console.log("Task № 4");
/* № 4
Sort in the decreasing order:

let arr = [5, 2, 1, -10, 8];
// ... your code to sort it in decreasing order
alert( arr ); // 8, 5, 2, 1, -10
*/
function antiSort(arrrr) {
    function numberAdapter(ell_0, ell_1) {
        // console.log(`ell_0: ${ell_0} and ell_1: ${ell_1}`);
        if (ell_0 > ell_1) return -1;
        if (ell_0 == ell_1) return 0;
        if (ell_0 < ell_1) return 1;
    }
    return arrrr.sort(numberAdapter);
}

let tester = [5, 2, 1, -10, 8]
console.log(antiSort(tester)); // [ 8, 5, 2, 1, -10 ]



console.log("Task № 5");
/* № 5
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
*/
function copySorted(someArr) {
    let newArr = [];
    for (let iter of someArr) newArr.push(iter);
    return newArr.sort();
}

let fifthArr = ["HTML", "JavaScript", "CSS"];

console.log(copySorted(fifthArr)); // [ 'CSS', 'HTML', 'JavaScript' ]
console.log(fifthArr); // [ 'HTML', 'JavaScript', 'CSS' ]




console.log("Task № 6");
/* № 6
Create a constructor function Calculator that creates “extendable” calculator objects.
The task consists of two parts.
First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

Usage example:

let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10

Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.
For instance, let’s add the multiplication *, division / and power **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

No parentheses or complex expressions in this task.
The numbers and the operator are delimited with exactly one space.
There may be error handling if you’d like to add it.
*/

function Calculator() {
    this.existingOperations = {
        "+": function (a, b) { return (+a + +b) },
        "-": function (a, b) { return (+a - +b) }
    }
    this.calculate = function (str) {
        let operElements = str.split(" ");
        if (this.existingOperations.hasOwnProperty(operElements[1])) {
            let usingFunction = this.existingOperations[operElements[1]];
            let sum = usingFunction(operElements[0], operElements[2]);
            return sum;
        }
    }
    this.addMethod = function (name, func) {
        this.existingOperations[name] = func;
        // console.log("Let's test:");
        // console.log(`2 ${name} 4 = ${this.existingOperations[name](2, 4)}`);
    }
}

let calc = new Calculator;
console.log(calc.calculate("3 + 7")); // 10
console.log(calc.calculate("8 - 2")); // 6

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

// console.log(powerCalc.existingOperations);

let result = powerCalc.calculate("2 ** 3");
console.log("2 ** 3 = " + result); // 8

let result_1 = powerCalc.calculate("2 * 3");
console.log("2 * 3 = " + result_1); // 6

let result_2 = powerCalc.calculate("2 / 3");
console.log("2 / 3 = " + result_2); // 0.666666...




console.log("Task № 7");
/* № 7
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
let names = // ... your code
alert( names ); // John, Pete, Mary
*/
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [john, pete, mary];

let names = users.map(item => item.name);

console.log(names); // John, Pete, Mary




console.log("Task № 8");
/* № 8
You have an array of user objects, each one has name, surname and id.
Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

For instance:

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = //

usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith

So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.
*/
let john_ = { name: "John", surname: "Smith", id: 1 };
let pete_ = { name: "Pete", surname: "Hunt", id: 2 };
let mary_ = { name: "Mary", surname: "Key", id: 3 };

let users_ = [john_, pete_, mary_];
let usersMapped = [];

for (let iter of users_) {
    let newObj = {};
    for (let component in iter) newObj[component] = iter[component];
    usersMapped.push(newObj);
}

usersMapped.map(item => {
    item.fullname = item.name + " " + item.surname;
    delete item.name;
    delete item.surname;
});

console.log(users_);
/*
[
  { name: 'John', surname: 'Smith', id: 1 },
  { name: 'Pete', surname: 'Hunt', id: 2 },
  { name: 'Mary', surname: 'Key', id: 3 }
]
*/
console.log(usersMapped);
/*
[
  { id: 1, fullname: 'John Smith' },
  { id: 2, fullname: 'Pete Hunt' },
  { id: 3, fullname: 'Mary Key' }
]
*/




console.log("Task № 9");
/* № 9
Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete
*/
let johnn = { name: "John", age: 25 };
let petee = { name: "Pete", age: 30 };
let maryy = { name: "Mary", age: 28 };

let arrArr = [petee, johnn, maryy];

function sortByAge(users) {
    users.sort((x, y) => x.age - y.age);
}

sortByAge(arrArr);

console.log(arrArr); // [john, mary, pete]
console.log(arrArr[0].name); // John
console.log(arrArr[1].name); // Mary
console.log(arrArr[2].name); // Pete




console.log("Task № 10");
/* № 10
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
Multiple runs of shuffle may lead to different orders of elements. For instance:

let arr = [1, 2, 3];
shuffle(arr); // arr = [3, 2, 1]
shuffle(arr); // arr = [2, 1, 3]
shuffle(arr); // arr = [3, 1, 2]

All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.
*/
let arrRand = [1, 2, 3];

function shuffle(array) {
    function randomEquivalent(a, b) {
        a.eq = Math.random();
        b.eq = Math.random();
        console.log(a.eq, b.eq); // undefined undefined
        return a.eq = b.eq;
        // let equiv = Math.random() - Math.random();
        // console.log(equiv);
    }
    array.sort(randomEquivalent);

    // array.sort(() => Math.random() - Math.random());
}

shuffle(arrRand);
console.log(arrRand); // arr = [3, 2, 1]
shuffle(arrRand);
console.log(arrRand); // arr = [2, 1, 3]
shuffle(arrRand);
console.log(arrRand); // arr = [3, 1, 2]




console.log("Task № 11");
/*
Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
The formula for the average is (age1 + age2 + ... + ageN) / N.
For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/
let johny = { name: "John", age: 25 };
let petey = { name: "Pete", age: 30 };
let marry = { name: "Mary", age: 29 };

let elfArr = [johny, petey, marry];

function getAverageAge(users) {
    let help = [];
    for (let ell of users) help.push(ell.age);
    // console.log(help); // [ 25, 30, 29 ]
    let sum = help.reduce((accumulate, during) => accumulate += during, 0);
    let avg = sum / users.length;
    return avg;
}

console.log(getAverageAge(elfArr)); // (25 + 30 + 29) / 3 = 28




console.log("Task № 12");
/*
Let arr be an array.
Create a function unique(arr) that should return an array with unique items of arr.
For instance:

function unique(arr) {
  // your code
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O
*/
function unique(arr) {
    let uniqs = [];
    for (let iter of arr) {
        if (!uniqs.includes(iter)) uniqs.push(iter);
    }
    return uniqs;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings)); // Hare, Krishna, :-O




console.log("Task № 13");
/*
Let’s say we received an array of users in the form {id:..., name:..., age:... }.
Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
For example:

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}

Such function is really handy when working with server data.
In this task we assume that id is unique. There may be no two array items with the same id.
Please use array .reduce method in the solution.
*/
let users_13 = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

function groupById(arrww) {
    // let finalObj = {};
    // arrww.reduce((accumulate, during) => finalObj[during.id] = during);
    let finalObj = arrww.reduce((accumulate, during) => accumulate[during.id] = during, {});
    return finalObj;
}

let usersById = groupById(users_13);
console.log(usersById);