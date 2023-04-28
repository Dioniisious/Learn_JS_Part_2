// № 1
// Какие недостатки вы видите в стиле написания кода этого примера?

/*
function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else
{
  alert(pow(x,n))
}
*/

/*
Недостатки:
    1 - фигурная скобка не на той строке, где объявлена функция и условие if;
    2 - лишние фигурные скобки для цикла for;
    3 - нет пробелов между операторами, аргументами, параметрами, 
        а также они должны быть после символа ";" в цикле for;
    4 - нет вертикальных отступов между логическими областями в функции.
*/


// Стилизованная версия:
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) { result *= x; }
    return result;
}

let x = prompt("x?", ''), n = prompt("n?", '')
if (n <= 0) {
    alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
} else {
    alert(pow(x, n))
}