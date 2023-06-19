console.log("№ 1");
/*
Turn the user into JSON and then read it back into another variable.

let user = {
  name: "John Smith",
  age: 35
};
*/
let user = {
    name: "John Smith",
    age: 35
};

let userJson = JSON.stringify(user);
console.log(userJson); // {"name":"John Smith","age":35}
console.log(typeof userJson); // string

let comeBack = JSON.parse(userJson);
console.log(comeBack); // { name: 'John Smith', age: 35 }
console.log(typeof comeBack); // object

// Или короче:
let shortTrans = JSON.parse(JSON.stringify(user));
console.log(shortTrans); // { name: 'John Smith', age: 35 }
console.log(typeof shortTrans); // object




console.log("№ 2");
/*
In simple cases of circular references, we can exclude an offending property from serialization by its name.
But sometimes we can’t just use the name, as it may be used both in circular references and normal properties. So we can check the property by its value.
Write replacer function to stringify everything, but remove properties that reference meetup:

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  // your code
}));

// result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}

*/
let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    occupiedBy: [{ name: "John" }, { name: "Alice" }],
    place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

// Мой вариант:
let limitOfLinks = true;
console.log(JSON.stringify(meetup, function replacer(key, value) {
    if (value === meetup) {
        if (limitOfLinks) {
            limitOfLinks = false;
            return value;
        }
        return undefined;
    }
    return value;
}));
// {"title":"Conference","occupiedBy":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}



// Более стратегический вариант:
console.log(JSON.stringify(meetup, function replacer(key, value) {
    return (key !== "" && value === meetup) ? undefined : value;
}));
// {"title":"Conference","occupiedBy":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}