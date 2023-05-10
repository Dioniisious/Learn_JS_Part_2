/** № 1
Возможно ли создать функции A и B, чтобы new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
Если да – приведите пример вашего кода.
 */
function A() {
    this.aaa = "aaa";
}
let B = A;

let a = new A();
let b = new B();

console.log(a == b); // false

console.log(a);
console.log(b);

/**
 * Итого - невозможно получить одинаковые объекты.
 * Каждый раз создается абсолютно уникальный независимый объект.
 * Например, объекты a и b похожие, но объект никогда не равен другому такому же объекту.
 * Т е, переменные a и b ссылаются на разные облисти памяти.
 */



/** № 2
Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
 */
function Calculator() {
    this.first = 1,
        this.second = 1,
        this.read = function (one, two) {
            this.first = one;
            this.second = two;
        },
        this.sum = function () {
            this.sumResult = this.first + this.second;
            return this.sumResult;
        },
        this.mul = function () {
            this.mulResult = this.first * this.second;
            return this.mulResult;
        }
}

let casioCalc = new Calculator();
console.log(casioCalc);
console.log(casioCalc.mul());
console.log(casioCalc.sum());



/** № 3
Создайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
 */
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function(x) {
        // let add = prompt('Введите любое число:');
        let add = x;
        this.value += Number(add);
    }
}

let summator = new Accumulator(0);
console.log(summator);

summator.read(5);
console.log(summator.value);
summator.read(8);
console.log(summator.value);
summator.read(7);
console.log(summator.value);