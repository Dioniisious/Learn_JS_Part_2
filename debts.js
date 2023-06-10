// Отличие методов isNaN и Number.isNaN:

// isNaN:
let x = NaN;
let y = 1;
let z = "";
let w = true;
let q = "..."; // По q становятся очевидными различия

console.log(isNaN(x)); // true
console.log(isNaN(y)); // false
console.log(isNaN(z)); // false
console.log(isNaN(w)); // false
console.log(isNaN(q)); // true


// Number.isNaN:
console.log(Number.isNaN(x)); // true
console.log(Number.isNaN(y)); // false
console.log(Number.isNaN(z)); // false
console.log(Number.isNaN(w)); // false
console.log(Number.isNaN(q)); // false

// Вывод: Number.isNaN выполняет сравнение без перевода в тип Number
// isNaN наоборот, переводит в строку переменную и потом сравнивает ее с NaN
// В обоих случаях проблема в том, что "" и булевый тип переводятся в 0 или 1




// Почему строка ниже выдает ошибку:
// console.log(10.toFixed()); // SyntaxError: Invalid or unexpected token
let aaa = 10;
console.log(aaa.toFixed()); // 10

// В ошибочном коде возникает ошибка, т к для JS 10.fixed() - это метод, применяемый для переменной 10. Но переменные не могут начинаться с числа




// Что такое метод padStart:
// Это метод, заполняющий данную строку некоторой подстрокой, чтобы исходная строка достигла требуемой длины:
let some = "aaaa";

// 1-й параметр - требуемая длина. Без 2го параметра заполнится пробелами:
console.log(some.padStart(10)); //      aaaa

// 2-й параметр - подстрока для заполнения:
console.log(some.padStart(10, ";-)")); // ;-);-)aaaa