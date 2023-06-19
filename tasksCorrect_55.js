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
    for (let i = 0; i <= arr.length; i++) {
        // console.log(`a: ${a}; b: ${b}; i: ${i}`);
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        }
    }
}

let arr_1 = [5, 3, 8, 1];
filterRangeInPlace(arr_1, 1, 4); // removed the numbers except from 1 to 4
console.log(arr_1); // [3, 1]




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
    array.sort(() => Math.random() - 0.5);
}

shuffle(arrRand);
console.log(arrRand); // arr = [3, 2, 1]
shuffle(arrRand);
console.log(arrRand); // arr = [2, 1, 3]
shuffle(arrRand);
console.log(arrRand); // arr = [3, 1, 2]




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
    let finalObj = arrww.reduce((accumulate, during) => {
        accumulate[during.id] = during;
        return accumulate;
    }, {});
    return finalObj;
}

let usersById = groupById(users_13);
console.log(usersById);