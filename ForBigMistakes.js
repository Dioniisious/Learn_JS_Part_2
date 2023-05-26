/**
 * Долги:
 * 1) Изучить циклы for...in и for...of и то, чем они различаются
 * 2) Сделать объект таким, чтобы к нему можно было применить for...of
 * 3) Отличие стрелочных функций от обычных ф-ций
 * 
 * В прошлый раз: код норм, но не мог пояснить его работу
 */

// № 1
// Цикл for...in:
// Предназначен для перебора свойств в объекте
// С объектом for...of не работает!
let obj = {
    one: 1,
    two: 2,
    three: 3
}

for (let i in obj) {
    console.log(`key: ${i}; value: ${obj[i]}`);
}

/*
OUTPUT:
key: one; value: 1
key: two; value: 2
key: three; value: 3
*/

// Циклы for..in и for..of отличаются при работе с массивами
// 
let someRow = [6, 8, 3, 7, 1, 0, 9, 4];

console.log("For...in:");
for (let i in someRow) {
    console.log(`key: ${i}; value: ${someRow[i]}`);
}

/*
OUTPUT:
key: 0; value: 6
key: 1; value: 8
key: 2; value: 3
key: 3; value: 7
key: 4; value: 1
key: 5; value: 0
key: 6; value: 9
key: 7; value: 4
*/

console.log("For...of:");
for (let i of someRow) {
    console.log(`key: ${i}; value: ${someRow[i]}`);
}

/*
OUTPUT:
key: 6; value: 9
key: 8; value: undefined
key: 3; value: 7
key: 7; value: 4
key: 1; value: 8
key: 0; value: 6
key: 9; value: undefined
key: 4; value: 1
*/

/**
 * Как вывод, можно сказать, что for...in и for...of оба нужны для обхода объектов.
 * При этом for...in работает со всеми, а for...of только с теми, у которых задана итерация.
 * Обычные ключ-значение for...of не перебирает.
 * 
 * Также видно, что for...in проходится по порядку по каждому элементу
 * А for...of перебирает вразнобой, да еще и может включать в перебор даже несуществующие св-ва.
 */


// № 2
// Цикл for...of для объекта:
// С объектом for...of не работает, однако объект можно сделать с итерированием.
// Именно тогда и получится применять к объекту данный цикл.


// № 3
/**
 * Отличие arrow function от обычной. Стрелочная ф-ция отличается тем, что не имеет собственного контекста this.
 * По этой причиние она не может являться конструктором. Однако методом класса легко может быть.
 * А контекст стрелочной ф-ции берется из внешней ф-ции, иначе он будет просто пустым объектом.
 */
const arrow = {
    type: "whistling",
    shoot: () => {
        console.log("Shoot! - - - - >>>----->"); // Shoot! - - - - >>>----->
    },
    showType: () => {
        console.log(this.type); // undefined
    }
}

arrow.shoot(); // Shoot! - - - - >>>----->
arrow.showType(); // undefined


let win = () => {
    console.log(this); // {}
}

win(); // {}