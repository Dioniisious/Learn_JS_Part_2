/*
Как работают chrome devTools - понятно.
У нас 3 способа остановить исполнение кода для отладки:
    1 - добавить breakpoints
    2 - добавить команду debugger
    3 - включить автоматический прерыв при возникновении исключений

О том, как ставить breakpoints: нажать на номер строки левой кнопкой мыши.

В chrome devTools есть команда debugger. Работает только в браузере, в
обычном коде команда будет проигнорирована.

Для проверки значений переменных можно использовать console.log()
Благодаря ней пользователь не увидит ничего, а разработчик в консоли
будет видеть переменные, их значения.

Также благодаря дебажингу можно увидеть стеки вызовов функций.
А также в данном окружении (например, некоторой функуции или теле цикла)
можно увидеть локальные и глобальные переменные.

Пошаговое выполнение можно осуществить кнопками шагов:
    step, step over, step into, step out.
*/