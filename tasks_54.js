// № 1
// What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log(fruits.length); // 4

// Ответ: создаем массив, объявляем 2ю переменную, ссылающущуюся на тот же массив и добавляем новый элемент



/* № 2
Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.

The array in the process:

Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll
*/
let musStyles = ["Jazz", "Blues"];

musStyles.push("Rock-n-Roll");
console.log(musStyles);

musStyles[(musStyles.length - 1) / 2] = "Classics";
console.log(musStyles);

let head = musStyles.shift();
console.log(head);
console.log(musStyles);

musStyles.unshift("Rap", "Reggae");
console.log(musStyles);



/* № 3
What is the result? Why?
*/
let arr = ["a", "b"];

arr.push(function () {
    console.log(this);
});

console.log(arr);

arr[2](); // Мы вызовем функцию. Ее this будет ссылаться на внешнее окружение отностиельно ф-ции. А ф-ция вложена в массив. Следовательно, для ф-ции this - это ссылка на массив arr.



/* № 4
Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/

/*
let allNums = [];

while (true) {
    let input = parseInt(prompt("Введите любое число"));
    if (isNaN(input)) {
        break;
    }
    allNums.push(input);
    alert(allNums);
}

let sum = 0;

for (let j of allNums) {
    sum += j;
}

alert(`As the result: ${sum}`);
*/



/* № 5
The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
The task is: find the contiguous subarray of arr with the maximal sum of items.
Write the function getMaxSubSum(arr) that will return that sum.

For instance:

getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (take all)
If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

getMaxSubSum([-1, -2, -3]) = 0
Please try to think of a fast solution: O(n^2) or even O(n) if you can.
*/

/*
function getMaxSubSum(arr) {
    let sums = [];
    let result = 0;
    for (let num of arr) {
        if (num >= 0) {
            result += num;
        } else if (result > 0) {
            sums.push(result, num);
            result = 0;
        } else {
            sums.push(num);
        }
    }
    if (result > 0) {
        sums.push(result);
    }
    // console.log(sums);
    return sums
    // return Math.max(sums);
}
*/


function getMaxSubSum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        let localMaximum = 0;
        for (let j = i; j < arr.length; j++) {
            localMaximum += arr[j];
            if (localMaximum > result) {
                result = localMaximum;
            }
        }
    }
    return result;
}


console.log(getMaxSubSum([-1, 2, 3, -9])); // == 5 (the sum of highlighted items)
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // == 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // == 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // == 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // == 100
console.log(getMaxSubSum([1, 2, 3])); // == 6 (take all)
console.log(getMaxSubSum([-1, -2, -3])); // = 0
