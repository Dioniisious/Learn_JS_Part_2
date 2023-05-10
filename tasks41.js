/*
№ 1
Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.
*/

const user = {};
user.name = "John";
user.surname = "Smith";
console.log(user);

user.name = "Pete";
console.log(user);

delete user.name;
console.log(user);



/*
№ 2
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
Должно работать так:

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
*/

function isEmpty(someObj) {
    if (Object.keys(someObj).length === 0) {
        return true;
    } else {
        return false;
    }
}

let schedule = {};
console.log(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false



/*
№ 3
Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete";
*/
const abUser = {
    name: "John"
};

// Это будет работать!
abUser.name = "Pete";

// И так тоже:
abUser["name"] = "Pete";



/*
№ 4
У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.
*/
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for (num in salaries) {
    sum += salaries[num];
}

console.log(sum);



/*
№ 5
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое.
*/
function multiplyNumeric(someObj) {
    for (attr in someObj) {
        if (typeof someObj[attr] === "number") {
            someObj[attr] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);