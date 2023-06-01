/* № 1
Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

ucFirst("john") == "John";
*/
function ucFirst(str) {
    let result = str[0].toUpperCase(0);
    let add = str.slice(1);
    return result + add;
}

console.log(ucFirst("i love all world"));
console.log(ucFirst("wow"));



/* № 2
Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

function checkSpam(str) {
    if (str.includes("viagra") || str.includes("XXX")) {
        return true;
    } else {
        return false;
    }
}

console.log(checkSpam("What's about viagra?"));
console.log(checkSpam("AAAKKKDDDDPPPXXXYYYZZZ"));
console.log(checkSpam("I'm normal, doNUT worry!"));



/* № 3
Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
The result of the function should be the truncated (if needed) string.
For instance:

truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
truncate("Hi everyone!", 20) = "Hi everyone!"
*/
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + "…";
    } else {
        return str;
    }
}

console.log(truncate("In your head - zombie!", 10));
console.log(truncate("Shed a light", 20));



/* № 4
We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.
The example:

alert( extractCurrencyValue('$120') === 120 ); // true
*/
function extractCurrencyValue(str) {
    return Number(str.slice(1));
}

console.log(extractCurrencyValue("$942"));
console.log(extractCurrencyValue("$147"));