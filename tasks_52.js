/**
 * № 1
 * Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
 */

/*
let operandOne = parseInt(prompt("Введите 1й операнд: "));
let operandTwo = parseInt(prompt("Введите 2й операнд: "));

// alert(typeof operandOne);
// alert(typeof operandTwo);

alert(`The sum of your operands is: ${operandOne + operandTwo}`);
*/



/**
 * № 2
Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

Например:
alert( 1.35.toFixed(1) ); // 1.4

Но почему в примере ниже 6.35 округляется до 6.3?
alert( 6.35.toFixed(1) ); // 6.3

Как правильно округлить 6.35?
*/
console.log(1.35.toFixed(1)); // 1.4
console.log(2.35.toFixed(1)); // 2.4
console.log(3.35.toFixed(1)); // 3.4
console.log(4.35.toFixed(1)); // 4.3
console.log(5.35.toFixed(1)); // 5.3
console.log(6.35.toFixed(1)); // 6.3
console.log(7.35.toFixed(1)); // 7.3
console.log(8.35.toFixed(1)); // 8.3
console.log(9.35.toFixed(1)); // 9.3

console.log(typeof 9.35.toFixed(1)); // string

console.log(1.35.toFixed(20)); // 1.35000000000000008882
console.log(2.35.toFixed(20)); // 2.35000000000000008882
console.log(3.35.toFixed(20)); // 3.35000000000000008882
console.log(4.35.toFixed(20)); // 4.34999999999999964473
console.log(5.35.toFixed(20)); // 5.34999999999999964473
console.log(6.35.toFixed(20)); // 6.34999999999999964473
console.log(7.35.toFixed(20)); // 7.34999999999999964473
console.log(8.35.toFixed(20)); // 8.34999999999999964473
console.log(9.35.toFixed(20)); // 9.34999999999999964473

console.log("Как тогда округлять числа при таких потерях точности:");

console.log(4.35.toFixed(20)); // 4.34999999999999964473
console.log(4.34999999999999964473.toFixed(10)); // 4.3500000000
console.log(4.34999999999999964473.toFixed(2)); // 4.35


/**
 * Короче, я не догадался, все гораздо проще в дробях.
 * Они хранятся с потерей точности, поэтому 3,5 может оказаться 3,4999999999999999 и что-то там. 
 * А 4 округляется в меньшую сторону относительно целого составляющего.
*/



/**
 * № 3
Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
Функция должна возвращать числовое значение.
Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
*/

/*
function readNumber() {
    while (true) {
        let input = prompt("Введите число:");
        alert(`Type of entered value in translation into the number:  ${!isNaN(+input)}`);
        if (!isNaN(+input)) {
            return input;
        } else if (input === null || input === "") {
            return null;
        }
    }
}

alert(readNumber());
*/



/**
 * № 4
Этот цикл – бесконечный. Он никогда не завершится, почему?

let i = 0;
while (i != 10) {
    i += 0.2;
}
*/
let i = 0;
while (i != 10) {
    i += 0.2;
    console.log(i.toFixed(20));
    if (i > 11) {
        break;
    }
}

/**
 * Из-за потери неточности мы никогда не попадем в 10.
 * У нас никогда не бывает 0,2. Бывают только 0,19999999 и что-то там.
 * А при их сложении потеря точности только арифметически растет.
 * Вот последовательность перехода через 9:
9.59999999999999786837
9.79999999999999715783
9.99999999999999644729 !== 10
10.19999999999999573674 !== 10
 */



/**
 * № 5
Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
Пример работы функции:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525
 */
function randomizer(min, max) {
    while (true) {
        let proisvol = Math.random();
        console.log(proisvol);
        let potential = proisvol * 10;
        if (potential > min && potential < max) {
            return potential;
        }
    }
}

let min = 1;
let max = 5;

console.log(randomizer(min, max));



/**
 * № 6
Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
Любое число из интервала min..max должно появляться с одинаковой вероятностью.
Пример работы функции:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
 */
function randomInteger(min, max) {
    while (true) {
        let proisvol = Math.random();
        console.log(proisvol);
        let potential = proisvol * 10;
        if (potential > min && potential < max) {
            return Math.trunc(potential);
        }
    }
}

let low = 1;
let high = 4;

console.log(randomInteger(low, high));