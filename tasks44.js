/**
 * № 1
Здесь функция makeUser возвращает объект.
Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?
 */
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

console.log(user.ref.name); // Результат - undefined

/**
 * Почему undefined?
 * Дело в том, что this расположено в самом объекте user, поэтому ссылается на то, что расположено снаружи объекта.
 * У функции makeUser нет свойств, поэтому ближайший внешний объект - глобальный, window.
 * Таким образом, св-во ref ссылается на объект window, у которого нет св-ва name.
 * Результат - получаем undefined.
 */

// Вызовем объект, видно, что name: "John", а ref ссылается на window
console.log(user);
// Вот тут как раз и получим искомое имя "John"
console.log(user.name);
// А тут ссылаемся на window
console.log(user.ref);



/**
 * № 2
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
 */
let calculator = {
  sum() {
    this.sumResult = this.first + this.second;
    return this.sumResult;
  },
  mul() {
    this.mulResult = this.first * this.second;
    return this.mulResult;
  },
  read(one, two) {
    this.first = one;
    this.second = two;
  }
};

calculator.read(4, 8);
console.log(calculator.sum());
console.log(calculator.mul());



/**
 * № 3
У нас есть объект ladder (лестница), который позволяет подниматься и спускаться.

Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
Такой подход широко используется в библиотеках JavaScript.
 */
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() {
    console.log( this.step );
  }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0


/* Вариант, как можно изменить данный объект с методами:
Просто добавляем слово this. После каждой ф-ции возвращается наш объект.
И тогда можно последовательно, метод за методом, преобразовывать св-во step.
*/
let advencedLadder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    console.log( this.step );
    return this;
  }
};

advencedLadder.up().up().down().showStep().down().showStep();