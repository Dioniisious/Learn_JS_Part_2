console.log("№ 1");
/*
Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.
Show it using alert.
*/
let someD = new Date(2012, 1, 20, 15, 12);
someD.setHours(someD.getHours() + someD.getTimezoneOffset() / -60);

let someD2 = new Date("2012-2-20 15:12+0:00");

console.log(someD); // 2012-02-20T15:12:00.000Z
console.log(someD2); // 2012-02-20T15:12:00.000Z




console.log("№ 2");
/*
Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
For instance:

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"
*/
function getWeekDay(date) {
    let weekDay = date.getDay();
    // console.log(weekDay); // 2
    switch (weekDay) {
        case 0: return "MO";
        case 1: return "TU";
        case 2: return "WE";
        case 3: return "TH";
        case 4: return "FR";
        case 5: return "SA";
        case 6: return "SU";
    }
}
let date = new Date(2012, 0, 3);
console.log(getWeekDay(date)); // WE




console.log("№ 3");
/*
European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7).
Write a function getLocalDay(date) that returns the “European” day of week for date.

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) );       // tuesday, should show 2
*/
function getLocalDay(date) {
    let week = date.getDay();
    // console.log(week); // 2
    return week + 1;
}

let datee = new Date(2012, 0, 3);
let dateee = new Date(2012, 0, 7);
let dateeee = new Date(2012, 0, 8);
console.log(getLocalDay(datee)); // 3
console.log(getLocalDay(dateee)); // 7
console.log(getLocalDay(dateeee)); // 1

// PS: в условии явно ошибка, т к я сделал правильно: пн начинается с 1, а вс - это 7




console.log("№ 4");
/*
Create a function getDateAgo(date, days) to return the day of month days ago from the date.
For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.
Should work reliably for days=365 or more:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

P.S. The function should not modify the given date.
*/
function getDateAgo(date, days) {
    // PS: Ниже строка не подойдет - придется учитывать разницу с UTC +0
    // const substr = new Date(date.getTime() - 1000 * 3600 * 24 * days);

    const substr = new Date(date.getTime() - 1000 * 3600 * 24 * days + 1000 * 3600 * date.getTimezoneOffset() / -60);
    // console.log(date.getTimezoneOffset()); // -180
    console.log(substr); // 2014-12-31T21:00:00.003Z

    return substr.getDate();
}

let dateToPast = new Date(2015, 0, 2);

console.log(getDateAgo(dateToPast, 1)); // 1, (2015-01-01T00:00:00.000Z)
console.log(getDateAgo(dateToPast, 2)); // 31, (2014-12-31T00:00:00.000Z)
console.log(getDateAgo(dateToPast, 365)); // 2, (2014-01-02T00:00:00.000Z)




console.log("№ 5");
/*
Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

Parameters:
year – four-digits year, for instance 2012.
month – month, from 0 to 11.

For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).
*/
function getLastDayOfMonth(year, month) {
    switch (month) {
        case 0, 2, 4, 6, 7, 9, 11:
            return 31;
        case 3, 5, 8, 10:
            return 30;
        case 1:
            return (year % 4 === 0) ? 29 : 28;
    }
}

console.log(getLastDayOfMonth(2012, 1)); // 29
console.log(getLastDayOfMonth(2013, 1)); // 28


// А если с помощью дат:
function getLastDay(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

console.log(getLastDay(2012, 1)); // 29
console.log(getLastDay(2013, 1)); // 28




console.log("№ 6");
/*
Write a function getSecondsToday() that returns the number of seconds from the beginning of today.
For instance, if now were 10:00 am, and there was no daylight savings shift, then:

getSecondsToday() == 36000 // (3600 * 10)

The function should work in any day. That is, it should not have a hard-coded value of “today”.
*/
function getSecondsToday() {
    const now = new Date();
    now.setHours(now.getHours() + now.getTimezoneOffset() / -60);
    const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getTimezoneOffset() / -60);

    console.log(now); // 2023-06-17T17:28:21.729Z
    console.log(dayStart); // 2023-06-17T00:00:00.000Z
    console.log((now.getTime() - dayStart.getTime()) / 1000); // 62901.729
}

// Все усложнено тем, что для компа будто UTC +0 - местное время... А почему...
getSecondsToday();




console.log("№ 7");
/*
Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.
For instance, if now is 23:00, then:

getSecondsToTomorrow() == 3600

P.S. The function should work at any day, the “today” is not hardcoded.
*/
function getSecondsToTomorrow() {
    const now = new Date();
    now.setHours(now.getHours() + now.getTimezoneOffset() / -60);
    const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, now.getTimezoneOffset() / -60);

    console.log(now); // 2023-06-17T17:35:55.917Z
    console.log(nextDay); // 2023-06-18T00:00:00.000Z
    console.log((nextDay.getTime() - now.getTime()) / 1000); // 23044.083
}

// Аналогичная труднообъяснимая аномалия с путанием часовых поясов
getSecondsToTomorrow();




console.log("№ 8");
/*
Write a function formatDate(date) that should format date as follows:

If since date passed less than 1 second, then "right now".
Otherwise, if since date passed less than 1 minute, then "n sec. ago".
Otherwise, if less than an hour, then "m min. ago".
Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.
For instance:

alert( formatDate(new Date(new Date - 1)) ); // "right now"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"
// yesterday's date like 31.12.16 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );
*/
function formatDate(date) {
    const now = new Date();
    const delta = now.getTime() - date.getTime();
    
    if (delta < 1000) return "right now";
    if (delta < 60000) return `${Math.trunc(delta / 1000)} sec. ago`;
    if (delta < 3600000) return `${Math.trunc(delta / 60000)} min. ago`;

    else {
        const day = (date.getDate() >= 10) ? date.getDate() : "0" + date.getDate();
        const month = (date.getMonth() >= 10) ? date.getMonth() : "0" + date.getMonth();
        const hour = (date.getHours() >= 10) ? date.getHours() : "0" + date.getHours();
        const min = (date.getMinutes() >= 10) ? date.getMinutes() : "0" + date.getMinutes();

        return `${day}.${month}.${date.getYear() - 100} ${hour}:${min}`;
    }
}

console.log(formatDate(new Date(new Date - 1))); // "right now"
console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 sec. ago"
console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 min. ago"
console.log(formatDate(new Date(new Date - 86400 * 1000))); // 16.05.23 18:11