console.log("№ 1");
/* № 1
There’s an array of messages:

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

Your code can access it, but the messages are managed by someone else’s code. New messages are added, old ones are removed regularly by that code, and you don’t know the exact moments when it happens.
Now, which data structure could you use to store information about whether the message “has been read”? The structure must be well-suited to give the answer “was it read?” for the given message object.
P.S. When a message is removed from messages, it should disappear from your structure as well.
P.P.S. We shouldn’t modify message objects, add our properties to them. As they are managed by someone else’s code, that may lead to bad consequences.
*/

let isReaden = new WeakSet();

// Функция, принимающая объект, записывающая его как ключ, а значение - прочитано/не прочитано:
function aboutMessage(currentObj) {
    if (!isReaden.has(currentObj)) {
        isReaden.add(currentObj);
    }
}

// Сообщения:
let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

// Записываем в weakSet:
// for (let mess of messages) console.log(mess); // { text: 'Hello', from: 'John' } { text: 'How goes?', from: 'John' } { text: 'See you soon', from: 'Alice' }
for (let mess of messages) aboutMessage(mess);

// Каждый из элементов есть:
for (let ell of messages) console.log(isReaden.has(ell)); // true true true

// Удалим пару из сообщений:
messages.shift();
messages.pop();

console.log(messages); // [ { text: 'How goes?', from: 'John' } ]

// А теперь снова вернем эти сообщения:
messages.unshift({ text: "Hello", from: "John" });
messages.push({ text: "See you soon", from: "Alice" });

console.log(messages); // [ { text: 'Hello', from: 'John' }, { text: 'How goes?', from: 'John' }, { text: 'See you soon', from: 'Alice' } ]

// И проверим, что же стало с weakMap:
for (let ell of messages) console.log(isReaden.has(ell)); // false true false

// Вывод: первый и последний объекты массива удалились, а вместе с ними и их инфа в weakSet
// Совет из решебника - использовать именно weakSet, чтобы хранить уникальные сообщения. А инфу, прочитано или нет, добавлять с помощью: let isRead = Symbol("isRead");
let isRead = Symbol("isRead");
messages[1][isRead] = true;
console.log(messages[1]); // { text: 'How goes?', from: 'John', [Symbol(isRead)]: true }




console.log("№ 2");
/* № 2
There’s an array of messages as in the previous task. The situation is similar.

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

The question now is: which data structure you’d suggest to store the information: “when the message was read?”.
In the previous task we only needed to store the “yes/no” fact. Now we need to store the date, and it should only remain in memory until the message is garbage collected.
P.S. Dates can be stored as objects of built-in Date class, that we’ll cover later.
*/
let isDefined = new WeakMap();

// Отличие от 1-й задачи в том, что вместо true/false мы уже храним огромную информацию о каждом сообщении:
let allAboutMess = {fromHuman: true, sent: true, date: Date(2017, 1, 1)}

// Функция, принимающая объект, записывающая его как ключ, а значение - прочитано/не прочитано:
function messData(currentObj) {
    if (!isDefined.has(currentObj)) {
        let probability = Math.random();
        let statusOfRead = allAboutMess;
        isDefined.set(currentObj, statusOfRead);
    }
}

// Записываем в weakMap:
// for (let mess of messages) console.log(mess); // { text: 'Hello', from: 'John' } { text: 'How goes?', from: 'John' } { text: 'See you soon', from: 'Alice' }
for (let mess of messages) messData(mess);

// Каждый из элементов есть:
for (let ell of messages) console.log(isDefined.has(ell)); // true true true

// Удалим пару из сообщений:
messages.shift();
messages.pop();

console.log(messages); // [ { text: 'How goes?', from: 'John' } ]

// А теперь снова вернем эти сообщения:
messages.unshift({ text: "Hello", from: "John" });
messages.push({ text: "See you soon", from: "Alice" });

console.log(messages); // [ { text: 'Hello', from: 'John' }, { text: 'How goes?', from: 'John' }, { text: 'See you soon', from: 'Alice' } ]

// И проверим, что же стало с weakMap:
for (let ell of messages) console.log(isDefined.has(ell)); // false true false