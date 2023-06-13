console.log("Task № 1");
/* № 1
Let arr be an array.
Create a function unique(arr) that should return an array with unique items of arr.
For instance:

function unique(arr) {
  // your code
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O

P.S. Here strings are used, but can be values of any type.
P.P.S. Use Set to store unique values.
*/
function unique(arr) {
    /*
    let setFromArr = new Set(arr);
    let unArr = [];
    for (let component of setFromArr) unArr.push(component);
    return unArr;
    */
   return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // Hare, Krishna, :-O




console.log("Task № 2");
/* № 2
Anagrams are words that have the same number of same letters, but in different order.
For instance:
nap - pan
ear - are - era
cheaters - hectares - teachers
Write a function aclean(arr) that returns an array cleaned from anagrams.

For instance:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

From every anagram group should remain only one word, no matter which one.
*/
function aclean(arr) {
    console.log(arr); // [ 'nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares' ]
    let newSet = new Set();
    let anagramMap = new Map();
    let answer = [];
    for (let word of arr) {
        let letters = word.toLowerCase().split("").sort().join("");
        anagramMap.set(word, letters);
    }
    console.log(anagramMap); // Map(7) { 'nap' => 'anp', 'teachers' => 'aceehrst', 'cheaters' => 'aceehrst', 'PAN' => 'anp', 'ear' => 'aer', 'era' => 'aer', 'hectares' => 'aceehrst' }
    for (let element of anagramMap) {
        // console.log(element);
        if (!newSet.has(element[1])) {
            newSet.add(element[1]);
            answer.push(element[0]);
        }
    }
    return answer;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr)); // [ 'nap', 'teachers', 'ear' ]




console.log("Task № 3");
/* № 3
We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.
But that doesn’t work:

let map = new Map();
map.set("name", "John");
let keys = map.keys();

// Error: keys.push is not a function
keys.push("more");

Why? How can we fix the code to make keys.push work?
*/
let map = new Map();
map.set("name", "John");
map.set("title", "Dennis");
let keys = map.keys();

console.log(map); // Map(2) { 'name' => 'John', 'title' => 'Dennis' }
console.log(keys); // [Map Iterator] { 'name', 'title' }

// Не работает. Почему? Дело в том, что keys - не массив!
// keys.push("more");

// Ни метод add, ни set - не работают. Т е, скорее всего, keys - просто перебираемый объект: он имеет итератор
// А это значит, можно с помощью перебора циклом for...of записать все ключи в новый массив

let correctKeys = Array.from(map.keys());

console.log(correctKeys); // [ 'name', 'title' ]