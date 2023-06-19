console.log("№ 1");
/*
Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.
Make two variants of the solution.

Using setInterval.
Using nested setTimeout.
*/

// Мой 1-й вариант через setInterval:
function printNumbers1(from, to) {
    let i = from;
    let circular = setInterval(() => console.log(i++), 1000);
    setTimeout(() => clearInterval(circular), (to - from + 2) * 1000);
}

printNumbers1(0, 15);


// Мой 2-й вариант через setInterval:
function printNumbers2(from, to) {
    let i = from;
    let circular = setInterval(function () {
        if (i === to) clearInterval(circular)
        console.log(i);
        return i++;
    }, 1000);
}

printNumbers2(0, 15);


// Мой вариант со вложенным setTimeout:
function printNumbers3(from, to) {
    setTimeout(nested, 1000, from);
    function nested(j) {
        console.log(j);
        j++;
        if (j <= to) setTimeout(nested, 1000, j);
    }
}

printNumbers3(0, 15);




console.log("№ 2");
/*
In the code below there’s a setTimeout call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.
When will the scheduled function run?

After the loop.
Before the loop.
In the beginning of the loop.
What is alert going to show?

let i = 0;
setTimeout(() => alert(i), 100); // ?

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
}
*/
let i = 0;
setTimeout(() => alert(i), 100); // ?

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
}

// Ответ - setTimeout и setInterval всегда идут после основного кода. Поэтому и в коде выше 67-я строка исполнится только после обычного кода: строки 70-72