// Что не так в нижеприведённом тесте функции pow?

/*
it("Возводит x в степень n", function () {
    let x = 5;

    let result = x;
    assert.equal(pow(x, 1), result);

    result *= x;
    assert.equal(pow(x, 2), result);

    result *= x;
    assert.equal(pow(x, 3), result);
});
*/

// P.S. Тест не содержит синтаксических ошибок и успешно проходит.



/*
Решение: что было не так
    1) без строки <<let assert = require("assert");>> функия assert не работает;
    2) не была написана спецификация describe (но вроде бы тесты и без нее работают);
    3) для каждого случая свой блок it (каждый тест проверяет только 1 кейс);
    4) гораздо удобнее вместо несколько it написать 1 цикл;

*/

function pow(a, b) {
    return a ** b;
}

let assert = require("assert");

describe("Правильный тест", function () {

    let x = 5;
    let result = 5;

    for (let i = 1; i < 4; i++) {
        it(`${x} ** ${i} === ${x ** i}`, function () {
            result = x ** i;
            assert.equal(pow(x, i), result);
        });
    }
});


/*
Вывод:

Правильный тест
    ✔ 5 ** 1 === 5
    ✔ 5 ** 2 === 25
    ✔ 5 ** 3 === 125


  3 passing (5ms)
*/